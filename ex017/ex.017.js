function curar() {
    var fin = document.getElementById("in").value
    var ini = 0
    ini = Number(ini)
    fin = Number(fin)
    while ( ini < fin  ){
        document.getElementById("aprv").innerHTML += `<img src="/img/homer.png" width="100px" height="100px">`
        ini++
    }
}