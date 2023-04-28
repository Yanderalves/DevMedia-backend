const conversor = require("./conversorTemperatura")

const express = require("express");
const req = require("express/lib/request");

const app = express();

app.get("/", (req, res) => {
    let temperatura = req.query.temperatura;
    let opcao = req.query.conversao;

    if (conversor.validaTemperatura(temperatura) && conversor.validarString(opcao)) {

        let resultado = conversor.selecionaConversao(temperatura, opcao);

        res.json({ success: true, result: resultado });
    } else {
        res.json({ success: false, message: "Dados inseridos são inválidos." })
    }
})

app.listen(8080);
