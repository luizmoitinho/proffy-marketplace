import express, { request } from "express";
import UserController from './controllers/UserController';
import ConnectionsController from './controllers/ConnectionsController';
import db from "./database/connection";

const routes = express.Router();
const userController = new UserController();
const connectionController = new ConnectionsController();

routes.post('/access', async (request, response) => {
    const {
        nm_nv_acesso
    } = request.body;

    await db('tb_nv_acesso').insert({
        nm_nv_acesso
    })
    return response.send();
});

routes.post('/areas', async (request, response) => {
    const {
        nm_area,
    } = request.body;

    await db('tb_area').insert({
        nm_area
    })
    return response.send();
});



//Users
routes.post('/users', userController.create);
routes.get('/users', userController.index);


//Conxao
routes.post('/connections', connectionController.create )
routes.get('/connections', connectionController.index )

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
