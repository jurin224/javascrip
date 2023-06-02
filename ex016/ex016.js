function jpv() {
    var nr = document.getElementById("name").value 
    for (var c = 1; c <=10; c++){
        var multi = nr * c 
        document.getElementById ("jpv").innerHTML += `${nr}x${c} = ${multi} <br>`
    }
}