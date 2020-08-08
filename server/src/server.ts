import express from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();


app.use(express.json()); //O express nao entende o json
app.use(routes);

app.listen(3333);