

function jpv() {
    var mes = parseInt(Math.random() * 15)
    var nome = document.getElementById("name").value

    switch (mes) {
        case 1:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Janeiro"
            break
        case 2:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Fevereiro"
            break
        case 3:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Março"
            break
        case 4:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Abril"
            break
        case 5:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Maio"
            break
        case 6:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Junho"
            break
        case 7:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Julho"
            break
         case 8:
            document.getElementById("jpv").innerHTML = "Você vai se casar em Agosto"
            break
        case 9:
                document.getElementById("jpv").innerHTML = "Você vai se casar em Setembro"
                break 
        case 10:
                document.getElementById("jpv").innerHTML = "Você vai se casar em Outubro"
                 break
         case 11:
                document.getElementById("jpv").innerHTML = "Você vai se casar em Novembro"
                break
         case 12:
                document.getElementById("jpv").innerHTML = "Você vai se casar em Dezembro"
                break
            console.log("Hoje é: Sabado")
            break;

        default:
            console.log("Dia invalido")
    }



}