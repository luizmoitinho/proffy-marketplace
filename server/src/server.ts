import express from "express";

const app = express();

app.use(express.json()); //O express nao entende o json

//Query Params => Paginação, filtros e ordenação
//Route Params => Identificar qual recurso eu quero atulizar ou deletar (url/users/:id)
//Corpo (Request body) => Dados para criação dou atualização de um registro


app.listen(3333);