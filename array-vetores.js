//criando um array vazio
var meuVetor = []

//criando vetores com dados 
var numeros = [4, 1, 8, 5, 2, 7]
var nomes = [`Julioo`, `Marcos`, `Sandra`]
var novoVetor = [20, `SESI`, true]

//acessando os dados de um vetor
console.log ( nomes[1] )
console.log ( novoVetor[1] )

//verificando o atributo de tamanho do vetor
console.log (numeros.length)


// indice 0    1    2    3    4
var frutas = [`Maçã`, `Laranja`, `Pera`, `Morango`, `Uva`]
//faço um for para percorrer todo o tamanho do vetor 
for (var i = 0; i <= frutas.length; i++) {
    // colo o i no indice da frutas para pegar o 
    // valor de cada indice do vetor 
    console.log ( frutas[i] )
}

//adicione novo  valor no final do vetor
frutas.push(`Abacaxi`)
for (var i = 0; i < frutas.length; i++) {
    console.log ( frutas[i] )
}

var novaListaFrutas = []
novaListaFrutas.push(`Limão`)
novaListaFrutas.push(`Melancia`)
console.log(novaListaFrutas)

//modificando o valor de um indici do vetor
novaListaFrutas[0] = `Melão`
console.log(novaListaFrutas)


//para lermos todos os elementos de um vetor, podemos
//tambem utilizar o -- for in -- como o exemplo abaixo 
for (var pos in frutas) {
    console.log ( frutas[pos] )
}

frutas.forEach( item => {
    console.log (`Item pelo forEach`, item)
}) 

frutas.forEach( (item, indice) => {
    console.log (`Item pelo forEach`, item)
}) 
