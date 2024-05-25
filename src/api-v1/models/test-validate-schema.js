import { validate } from "jsonschema";
import { pessoaSchema } from "./schemas";

var obj = {
  "nome": "João Albuquerque",
  "telefone": "001-124-2111",
  "organizacao": null,
  "tags": [
    "trabalho",
    "amigos"
  ]
};

var result = validate(obj, pessoaSchema)
console.log(result)