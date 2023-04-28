const calcularIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
}


const validarDado = (dado) => {
    if (isNaN(dado)) {
        return false;
    } else {
        return true;
    }
}

exports.calcularIMC = calcularIMC;
exports.validarDado = validarDado;