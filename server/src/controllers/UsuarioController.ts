import {Request, Response} from 'express';
import db from "../database/connection";

import ServicoInterface from '../Interfaces/ServicoInterface'
import EnderecoInterface from '../Interfaces/EnderecoInterface'
import HorarioServicoInterface from '../Interfaces/HorarioServicoInterface'
import convertHoursToMinutes from '../Utils/convertHoursToMinute';

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);


export default class UsuarioController{

    async index(request: Request, response: Response){
        
        const filters = request.query;

        const nome = filters.nome as string;
        const area = filters.area as string;
        const dia_semana = filters.dia_semana as string;

        if(!area || !dia_semana)
            return response.status(400).json({
                error:'Campos não foram informados'
            })
        
        const services = await db('tb_servico')
                               .join('tb_usuario', 'tb_servico.fk_id_profissional','=', 'tb_usuario.id_usuario')
                               .join('tb_horario_servico', 'tb_horario_servico.fk_id_servico','=', 'tb_servico.id_servico')
                               .where('tb_horario_servico.dia_semana','=',dia_semana)
                               .where('tb_servico.fk_id_area','=',area)
                               .where('tb_servico.nm_servico','like','%'+nome+'%')
                               .select(['tb_usuario.*','tb_servico.*','tb_horario_servico.*'])
                               
                            
        return response.status(200).json(services)
    }

    
    async create(request: Request, response: Response){

        const {
            nm_usuario,
            img_usuario,
            cpf_usuario,
            email_usuario,
            tel_usuario,
            bio_usuario,
            login_usuario,
            senha_usuario,
            fk_id_nv_acesso,
            endereco,
            servico,
            horarios_servico
        } = request.body;

        const transaction = await db.transaction();

        try{
            const userId = (await transaction('tb_usuario').insert({
                nm_usuario,
                img_usuario,
                cpf_usuario,
                email_usuario,
                tel_usuario,
                bio_usuario,
                login_usuario,
                senha_usuario:  bcrypt.hashSync(senha_usuario, salt),
                fk_id_nv_acesso,
            }))[0];

            if (fk_id_nv_acesso == 3) {
                //Aguarda a operacao finalizar
                const enderecoFormated =  endereco.map((endItem: EnderecoInterface) => {
                    return {
                        UF: endItem.UF,
                        cidade: endItem.cidade,
                        bairro:endItem.bairro,
                        rua:endItem.rua,
                        numero:endItem.numero,
                        fk_id_usuario: userId
                    }
                });

                await transaction('tb_endereco').insert(enderecoFormated);

                const serviceFormated = servico.map( (serviceItem: ServicoInterface) => {
                    return {
                        img_servico         : serviceItem.img_servico,
                        nm_servico          : serviceItem.nm_servico,
                        desc_servico        : serviceItem.desc_servico,
                        valor_servico       : serviceItem.valor_servico,
                        fk_id_profissional  : userId,
                        fk_id_area          : serviceItem.fk_id_area
                    };
                }) 
                const fkIdServico = (await transaction('tb_servico').insert(serviceFormated))[0];
        
                const horariosServico =  horarios_servico.map( (horario: HorarioServicoInterface) =>{
                    return {
                        dia_semana  : horario.dia_semana,
                        horario_inicio : convertHoursToMinutes(horario.horario_inicio),
                        horario_fim : convertHoursToMinutes(horario.horario_fim),
                        fk_id_servico: fkIdServico
                    }
                });
               
                await transaction('tb_horario_servico').insert(horariosServico)
            }
        
            await transaction.commit();
            return response.status(201).json({
                message:"Usuário criado com sucesso."
            });
    
        }catch(err){
            await transaction.rollback();
            return response.status(400).json({
                message:'Não foi possivel realizar o cadastro.'
            })
        }
    }
}

                            //    .join('tb_avaliacao', function(){
                            //         // if(parseInt(estrelas)>0){
                            //         //     console.log('ok')
                            //         //     this.on('tb_avaliacao.num_estrela','=',estrelas)
                            //         // }
                            //         // this.on('tb_servico.fk_id_profissional','=','tb_avaliacao.fk_id_profissional')
                            //         // this.orOn('tb_servico.id_servico','tb_avaliacao.fk_id_servico')
                            //    })