import express, { request } from "express";
import db from "./database/connection";

const routes = express.Router();

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

interface AddressItem{
    UF      :String;
    cidade  :String;
    bairro  :String;
    rua     :String;
    numero  :Number
}

routes.post('/access', async (request, response) => {
    const {
        nm_nv_acesso
    } = request.body;

    await db('tb_nv_acesso').insert({
        nm_nv_acesso
    })
    return response.send();
});


routes.post('/users', async (request, response) => {
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
        endereco
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
            const enderecoFormated =  endereco.map((endItem: AddressItem) => {
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
});



export default routes;

/*
const bcrypt = require('bcryptjs');
const password = '123';

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

Para verificar (comparar) os hashes, use:

// Assumindo que `db_password` seja o hash encriptado no exemplo anterior:
const db_password = db.password; // Imagine que veio da base de dados.
bcrypt.compareSync('123', db_password); // Irá retornar true.
bcrypt.compareSync('456', db_password); // Irá retornar false.
*/
