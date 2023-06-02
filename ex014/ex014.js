function jpv() {
    for (var i = 0; i < 6; i ++) {
        var numero = parseInt(Math.random() * 60)
        document.getElementById("res").innerHTML += ` ${numero} `
    }
}