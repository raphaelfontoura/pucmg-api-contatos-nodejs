import express from "express";

const pessoaRouter = express.Router();

pessoaRouter.use("/", (req, res, next) => res.send("ENDPOINT PESSOA"));

export default pessoaRouter;