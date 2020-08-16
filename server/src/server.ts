import express from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();

//O express nao entende o json
app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3333);