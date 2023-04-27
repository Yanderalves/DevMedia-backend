const express = require('express');

const app = express();

const calculadoraIMC = require("./calcIMC");

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (calculadoraIMC.validarDados(peso, altura)) {

        let imc = calculadoraIMC.calcularIMC(peso, altura)

        res.json({ sucess: true, imc: imc })
    } else {
        res.status(400).json({ sucess: false, message: "Dados fornecidos são inválidos" })
    }

});

app.listen(8080, () => {
    let data = new Date();
    console.log(`Server node iniciado em ${data}`)
})
