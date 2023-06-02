
//declarando uma funçao sem parametro e sem retorno 
function exibirInformacao(){
     console.log (`Executei a funçao exibir info`)
}

//chamando a minha funçao 
exibirInformacao()
exibirInformacao()



//codigo do ricardo fazendo a tabuada
function ricardoCalculeTabuada(nr){
    for (var i=0; i<= 10; i++){
        console.log (`${nr} x ${i} = ${nr * i}`)
    }

}
//colocando o numero que quero que o ricardo mostre a tabuada 
ricardoCalculeTabuada(43)


//calculando o dobro do numero, codigo
function ricardoCalculeDobro(nr){
    let dobro = nr * 2
    return dobro 
}

//segunda parte do codigo de calcular o dobro
//e colocando o numero que desejo que seja dobrado/ nesse caso o numero 4 e o numero 9 
var resultado = ricardoCalculeDobro(4) 
console.log (resultado)
var resultado = ricardoCalculeDobro(9)
console.log (resultado)


function soma(n1, n2)
{
    var soma = n1 + n2
    return soma
}

var n1 = 2
var n2 = 3 

var calculoSoma = soma(n1,n2)
console.log(calculoSoma)