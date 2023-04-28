
const converteParaCelsius = (temperatura) => {
    return ((temperatura - 32) / 1.8).toFixed(2);
}

const converteParaFahrenheit = (temperatura) => {
    return ((temperatura * 1.8) / + 32).toFixed(2);
}

const selecionaConversao = (temperatura, medida) => {
    if (['F', 'C'].includes(medida)) {
        if (medida == 'F')
            return converteParaFahrenheit(temperatura);
        else
            return converteParaCelsius(temperatura);
    } else {
        return null;
    }
}

const validaTemperatura = (temperatura) => {
    return !(isNaN(temperatura));
}

const validarString = (string) => {
    return (['F', 'C'].includes(string) && string.length == 1)
}


exports.selecionaConversao = selecionaConversao;
exports.validaTemperatura = validaTemperatura;
exports.validarString = validarString;
