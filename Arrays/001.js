let array = [5, 8, 9, 3, 6, 9, 8, 25, 1, 8];

array.push(15)                                                      // Adiciona um elemento na última posição do array

array.splice(2, 2)                                                  // Remove um elemento do meio do array (Index != 0 and Index != len(array) - 1), parâmetros: Posição inicial, Quantidade de elementos a serem removidos.

array = array.map((item) => item * 2)                               // O map cria uma array a partir de outro

array.pop()                                                         // Remove o último elemento do array

array.shift()                                                       // Remove o primeiro elemento do array

const printValues = (value, Index) => {
    console.log(value, Index)
}

array.forEach(printValues)                                          // Percorre um array e aplica uma função em cada item

array.filter()                                                      // Cria um novo array a partir de uma dada condição de filtragem

array.reduce()                                                      // Reduz o array a um único valor (Number, string, objeto, etc)

