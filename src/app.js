const express = require("express");
const app = express(); 
const PUERTO = 8080; 

const mongoose = require("mongoose");

const clientesRouter = require("./routes/clientes.router.js");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/clientes", clientesRouter);


app.listen(PUERTO, () => {
    console.log(`Estamos conectados en el puerto ${PUERTO}`);
})



mongoose.connect("mongodb+srv://roysandrone:Coder1@cluster0.ybo821i.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("Conectados a la DB"))
    .catch((error)=>console.log(error));

