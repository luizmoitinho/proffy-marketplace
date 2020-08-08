import {Request, Response} from 'express';
import db from "../database/connection";


const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

interface AddressItem{
    UF      :String;
    cidade  :String;
    bairro  :String;
    rua     :String;
    numero  :Number
}


export default class UserController{

    async index(request: Request, response: Response){
        const filters = request.query;
        if(!filters.name && !filters.type && !filters.favorite)
            return response.status(400).json({
                error:'Campos não foram informados'
            })


    }

    async create(request: Request, response: Response){

        const {
            img_servico,
            nm_servico,
            desc_servico,
            valor_servico,
            fk_id_profissional,
            fk_id_area
        } = request.body;
    
        const transaction = await db.transaction();
        
        try{
            const userId = (await transaction('tb_usuario').insert({
                img_servico,
                nm_servico,
                desc_servico,
                valor_servico,
                fk_id_profissional,
                fk_id_area 
            }))[0];

            await transaction.commit();
            return response.status(201).json({
                message:"Servico criado com sucesso."
            });
    
        }catch(err){
            await transaction.rollback();
            return response.status(400).json({
                message:'Não foi possivel cadastrar o serviço.'
            })
        }
    }
}