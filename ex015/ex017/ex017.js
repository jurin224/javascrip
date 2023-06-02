function jpv() {
    var ini = document.getElementById("name").value 
    var fin = document.getElementById("name2").value 
    ini = Number(ini)
    fin = Number(fin)
    while ( ini <= fin ){
        if (ini % 2 == 1){
            document.getElementById("jpv").innerHTML += `${ini}<br>`
        } else {}
        ini++ 
    }
}