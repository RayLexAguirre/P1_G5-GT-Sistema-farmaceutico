const mongoose = require("mongoose");

let PersonSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  nss: String,
  puesto_Trabajo: String,
  Salario: Number,
});

module.exports = mongoose.model("Person", PersonSchema);
