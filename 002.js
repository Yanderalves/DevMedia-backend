const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];


const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

novoArrayCarros = carros.map((carro) => {
    return {
        marca: carro.marca,
        modelo: carro.modelo
    }
});

carrosFiat = novoArrayCarros.filter((item) => item.marca == 'Fiat');

iniciasDosMeses = meses.map((mes) => mes.substring(0, 3).toUpperCase())