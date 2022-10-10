const mongoose = require("mongoose");

let SucursalSchema = new mongoose.Schema({
  municipio: String,
  colonia: String,
  calle: String,
  codigoPostal: Number,
});

module.exports = mongoose.model("Sucursal", SucursalSchema);
