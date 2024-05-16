import DataStore from "nedb";

const pessoasDB = new DataStore();
const organizacoesDB = new DataStore();

export default {
  pessoasDB,
  organizacoesDB
}