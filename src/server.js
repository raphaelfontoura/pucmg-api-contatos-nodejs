import http from "http";
import express from "express";
import apiRouter from "./api-v1/api-router";

const app = express();
const port = 5500;

app.use("/api/v1", apiRouter);
app.use("/", (req, res) => res.send("-- API Contatos --"));

http.createServer(app).listen(port, () => console.log(`Servidor pronto na porta ${port}`));

