const calcularIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
}


const validarDados = (peso, altura) => {
    if (isNaN(peso) && isNaN(altura)) {
        return false;
    } else {
        return true;
    }
}

exports.calcularIMC = calcularIMC;
exports.validarDados = validarDados;