import express from "express";
import { validate } from "jsonschema";

import pessoaModel from "../models/pessoa-model";
import { pessoaSchema } from "../models/schemas"

const pessoaRouter = express.Router();

// pessoaRouter.use("/", (req, res, next) => res.send("ENDPOINT PESSOA"));
pessoaRouter.get("/", listaPessoas);
pessoaRouter.get("/:id", getPessoa);
pessoaRouter.post("/", inserePessoa);
pessoaRouter.put("/:id", alteraPessoa);
pessoaRouter.delete("/:id", deletaPessoa);

function listaPessoas(req, res, next) {
  pessoaModel.lista({}, (err, lista) => {
    if (!err) {
      res.json(lista);
    }
    else {
      res.status(400).send(err.message);
    }
  })
}

function inserePessoa(req, res, next) {
  var result = validate(req.body, pessoaSchema)
  if (result.errors.length > 0) {
    res.status(400).send("Erro no formato do objeto Json");
  }
  else {
    pessoaModel.insere(req.body, (err, objNovo) => {
      if (!err) {
        res.json(objNovo);
      }
      else {
        res.status(400).send(err.message);
      }
    })
  }
}

function deletaPessoa(req, res, next) {
  pessoaModel.exclui(req.params.id, (err, result) => {
    if(!err) {
      res.status(204).send(`deleted ${result} record`);
    }
    else {
      res.status(400).send(err.message);
    }
  })
}

function getPessoa(req, res) {
  pessoaModel.getById(req.params.id, (err, result) => {
    if(!err) {
      res.status(200).send(result)
    } else {
      res.status(400).send(err.message)
    }
  })
}

function alteraPessoa(req, res) {
  var result = validate(req.body, pessoaSchema)
  if (result.errors.length > 0) {
    res.status(400).send("Erro no formato do objeto Json");
    return
  }
  pessoaModel.altera(req.params.id, req.body, (err, result) => {
    if(!err) {
      res.status(200).json(result)
    } else {
      res.status(400).send(err.message)
    }
  })
}

export default pessoaRouter;