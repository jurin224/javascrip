
    /*
    LEGALLLL
    COMENTARIO MAIS FACIL 
    */

    //alert("Olá Mundo!!!") 

    //No Console conseguimos visualizar informações sem exibir na pagina
    console.log("Olá mundo, estou utilizando o cosole")

    console.error("Olá mundo, estou utilizando o cosole")
    console.warn("Olá mundo, estou utilizando o cos ole")
    console.info("Olá mundo, estou utilizando o cosole")

    //Um CSS só que no HTML, funciona da mesma forma, aqui damos função ao botão etc...
    function Botão1() {
        alert("Você clicou no BUTÃO")
    }

    function BotãoCorDefundo() {
        document.body.style.backgroundColor = "black"
    }

    function botaoNome() {
        var nome2 = prompt("Qual seu nome")
        confirm("Olá " + nome2 + ", entendeu variável?")
        confirm(`Olá  ${nome2}, entendeu variável?`)
    }



    //Declarando variaveis 
    //String - Conjunto de caracteres - Declarar com "" ou ``
    var nome = "Jurin"
    var sobrenome = "Miguel"
    //Number - Todo número em JS é do tipo Number -
    //Declarar sem ""
    var idade = 35
    //Boolean -  Somente recebe true ou false
    var aprovado = true

    //comando typeof para saber o tipo do dado
    console.log(typeof nome)
    //Concatenando springs com o +
    console.log(nome + ' ' + sobrenome)

    var n1 = 10
    var n2 = 15
    //Ira somar as 2 variaveis number (25)
    console.log(n1 + n2)
    //ira concatenar "juntar" as 2 variaveis ("1015")
    var n3 = "10"
    var n4 = "15"
    console.log(n3 + n4)
    //se utilizarmos o + com string ele concatena se utilizarmos com number soma

    var n1 = 2
    var n2 = 5
    //uma variavel pode receber o valor de outra variavel
    n1 = n2
    console.log("n1 = " + n1 + " e o n2 = " + n2)

    //para atribuir um valor decimal utilizar . não,
    var salario = 1300.99
    //posso também somar a variavél com ela mesmo 
    salario = salario + 320
    console.log(salario)

    //antigamente para juntar texto e variaveis faziamos ass
    console.log(`Olá,` + nome + `você tem` + idade + `anos`)
    //hoje utilizamos o templateString forma mais simples
    console.log(`olá, ${nome} voce tem ${idade} anos`)


    function botaosomar() {
        var nr1 = prompt("Digete um número:")
        var nr2 = prompt("Gite outro número:")

        nr1 = parseFloat(nr1)
        nr2 = Number(nr2)

        console.log(typeof nr1)
              
        var soma = nr1 + nr2

        //colocando o resuntado e conta na tela do pc (exemplo="1+44=45" 
        //resumindo ele fica salvo na tela do pc a sua vonta por completo )
        document.getElementById("res-soma").innerHTML +=

        ` <br> A soma de ${nr1} + ${nr2} = ${soma}`
    }
    function botaocidade(){
        var cidade = document.getElementById("cidade").value
        document.getElementById("resultadoCidade").innerHTML += `<br> O nome da cidade ${cidade}`
    }



    //Operador Relacionais
    var n1 = 5
    var n2 = 6
    console.log (n1 > n2) // >  Maior que
    console.log (n1 < n2) // < Menor que
    console.log (n1 >= n2) // >= maior ou igual que 
    console.log (n1 <= n2) // <= menor ou igual que 
    console.log (n1 == n2) // == igual
    console.log (n1 != n2) // != não igual - diferente 
           
           

// Etrutura  condicionais 
if (n1 > n2){
    //verificando a condição entere parentes 
    console.log ("o n1 é maior uqe o n2")
}

else {
    console.log ("o n1 não é maior que o n2")

}

//exemplo de condição
var minhaIdade = 18
if (minhaIdade >=16 ){
    console.log ("voê pode voltar")
}
else{
    console.log ("voê NÃO pode voltar")
}


//sorteio de nomeros ALEATÓRIOS 
var nrSorteado = parseInt(Math.random() * 100)
console.log(nrSorteado)



//switch case 
//é como se fosse varios if else de forma mais simples 
var diaSemana = 3 
switch (diaSemana) {
    case 1:
        console.log("Hoje é: Domingo")
        break; //para o switch case e não verificar as outras opçoes
    case 2:     
        console.log("Hoje é: Segunda")
        break;
    case 3: 
        console.log("Hoje é: Terça")
        break;  
    case 3: 
        console.log("Hoje é: Quarta")
        break; 
    case 3: 
        console.log("Hoje é: Quinta")
        break;    
    case 3: 
        console.log("Hoje é: Sexta")
        break;       
    case 3: 
        console.log("Hoje é: Sabado")
        break;  
    default:
        console.log("Dia invalido")
}

//For - Laço de repetição
// (Aqui eu inicio o controle de vazes)
// 1ª Expressão 1 <= 10
// 
for (var i = 1; i <= 10; i++){
    console.log(i)
}

//verificando se número é par com while
var contador = 1 //inicinado o contador de vezes que irá executar 
while (contador <= 10) {
    if (contador % 2 == 0){
        console.log (`${contador} é par`)
    } else {
        console.log (`${contador} é impar`)
    }
    contador++ //adicionamos  +1 ao contador para não ficar em loop
}

