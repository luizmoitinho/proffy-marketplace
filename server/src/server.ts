import express from "express";

const app = express();

app.use(express.json()); //O express nao entende o json



//Query Params => Paginação, filtros e ordenação
app.get('/user', (request, response ) => {
    console.log(request.query);
    return response.json([]);
});



//Route Params => Identificar qual recurso eu quero atulizar ou deletar (url/users/:id)
app.delete('/user/:id', (request, response ) => {
    console.log(request.params);
    return response.json([]);
});

//Corpo (Request body) => Dados para criação dou atualização de um registro
app.post('/users', (request, response ) => {
    
    console.log(request.params);
    console.log(request.body);

    const users = [
        {name:'luiz',age:22},
        {name:'fernanda',age:23},
    ];

    return response.json([users]);
});


app.get('/users', (request, response ) => {
    const users = [
        {name:'luiz',age:22},
        {name:'fernanda',age:23},
    ];

    return response.json([users]);

});

app.listen(3333);