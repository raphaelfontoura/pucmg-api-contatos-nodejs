import http from "http";
import express from "express";
import bodyParser from "body-parser";

import apiRouter from "./api-v1/api-router";

const app = express();
const port = 5500;

// associar o json ao objeto req.body
app.use(bodyParser.json()); 
// associa os parametros de URL e Body com formato urlEncoded ao objeto req.params
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/v1", apiRouter);
app.use("/", (req, res) => res.send("-- API Contatos --"));

http.createServer(app).listen(port, () => console.log(`Servidor pronto na porta ${port}`));

