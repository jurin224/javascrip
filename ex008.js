function botaocalcular(){
    var nr1 = document.getElementById("nrDigitando1").value
    var nr2 = document.getElementById("nrDigitando2").value
    nr1 = Number(nr1)
    nr1 = Number(nr2)
    var soma = nr1 + nr2
    var media = soma / 2
    document.getElementById("resultado").innerHTML +=
    `o aluno tirou a nota $(nr1) e $(nr2) sua média foi ${media}`
}