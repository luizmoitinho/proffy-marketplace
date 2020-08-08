import {Response, Request} from 'express';
import db from '../database/connection';


export default class ConnectionsController{

    async index(request: Request, response: Response){

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