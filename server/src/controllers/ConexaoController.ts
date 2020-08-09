import {Response, Request} from 'express';
import db from '../database/connection';


export default class ConexaoController{

    async index(request: Request, response: Response){
        const numConexoes = await db('tb_conexao').count('* as total');

        const { total } = numConexoes[0];
        return response.status(200).json({total})

    }

    async create(request: Request, response: Response){

        const {id_usuario,id_profissional} = request.body;
        console.log(request.body)

        await db('tb_conexao').insert({
            fk_id_profissional : id_profissional,
            fk_id_usuario      : id_usuario
        })

        return response.status(201).send()
    }



}