import express, { request } from "express";
import db from "./database/connection";

const routes = express.Router();

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

routes.post('/access', async(request, response) =>{
    const {
        nm_nv_acesso
    } = request.body;

    await db('tb_nv_acesso').insert({
        nm_nv_acesso
    })
    return response.send();
});


routes.post('/users', async(request, response) =>{
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
     fk_id_endereco
   } = request.body; 
   
//    console.log(request.body);

   //Aguarda a operacao finalizar
   await db('tb_usuario').insert({
        nm_usuario,
        img_usuario,
        cpf_usuario,
        email_usuario,
        tel_usuario,
        bio_usuario,
        login_usuario,
        senha_usuario,
        fk_id_nv_acesso
   })

   return response.send();

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
