import {Request, Response}  from 'express';
import db from '../database/connection';

import NvAcessoInterface from '../Interfaces/NivelAcessoInterface';

export default class NvAcessoController{

    async create(request: Request,response: Response){

        const nm_nv_acesso = request.body;
        if(!nm_nv_acesso)
            return response.status(401)
                           .json({
                               message:"Nome do nivel de acesso não informado."
                            }) 

        const nmAcessoFormatado =  nm_nv_acesso.map( (nvAcessoItem: NvAcessoInterface ) =>{
            return {
                nm_nv_acesso : nvAcessoItem.nm_nv_acesso
            }
        })

    
        await db('tb_nv_acesso').insert(nmAcessoFormatado);
    }
    
}