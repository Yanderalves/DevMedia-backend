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

const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 3, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];

let tabela = [
    { equipe: 'Time Azul', pontos: 25 },
    { equipe: 'Time Verde', pontos: 47 },
    { equipe: 'Time Amarelo', pontos: 39 },
    { equipe: 'Time Vermelho', pontos: 16 },
];


novoArrayCarros = carros.map((carro) => {
    return {
        marca: carro.marca,
        modelo: carro.modelo
    }
});

carrosFiat = novoArrayCarros.filter((item) => item.marca == 'Fiat');

iniciasDosMeses = meses.map((mes) => mes.substring(0, 3).toUpperCase())


const total = itensCarrinho.reduce((total, item) => total + (item.qnt * item.valor), 0)

console.log(total)


console.log("\nArray antes da ordenação:\n");
console.info(numeros);

const numeros = [10, 1, 2, 34, 6];

function ordenaNumeros(a, b) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log(" ");
    return a - b;
}

numeros.sort((a, b) => b - a);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");


tabela_ordenada = tabela.sort((a, b) => b.pontos - a.pontos)
