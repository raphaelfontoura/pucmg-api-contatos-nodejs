import http from "http";
import express from "express";

const app = express();
const port = 5500;

app.get("/doc", (req, res, next) => res.send("Documentação da aplicação!"))
app.get("/api/v1", (req, res, next) => res.send("API V1 no ar!"));

http.createServer(app).listen(port, () => console.log(`Servidor pronto na porta ${port}`));

