
const mongoose = require("mongoose");


const clientesCollecction = "clientes"; 

const clientesSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    correo: String,
    numero: String,
});


const ClientesModel = mongoose.model(clientesCollecction, clientesSchema);

module.exports = ClientesModel;