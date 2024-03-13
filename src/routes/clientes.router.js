const express = require("express");
const router = express.Router();
const ClientesModel = require("../models/clientes.model.js");

router.get("/", async (req, res) => {
    try {
        const clientes = await ClientesModel.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({message: "Error en el servidor"});
    }
});

router.post("/", async (req, res) => {
    try {
        const cliente = new ClientesModel(req.body);
        await cliente.save(); 
        res.send({message:"Cliente cargado exitosamente", cliente: cliente});
    } catch (error) {
        res.status(500).json({message: "Error en el servidor"});
    }
});

router.put("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndUpdate(req.params.id, req.body); 
        if(!cliente) {
            return res.status(404).send({message: "Cliente no encontrado"});
        }
        res.status(200).send({message:"Cliente actualizado exitosamente"});
    } catch (error) {
        res.status(500).json({message: "Error en el servidor"});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndDelete(req.params.id); 
        if(!cliente) {
            return res.status(404).send({message: "Cliente no encontrado"});
        }
        res.status(200).send({message:"Cliente borrado exitosamente"});
    } catch (error) {
        res.status(500).json({message: "Error en el servidor"});
    }
});

module.exports = router; 