function jpv() {
    var filmes = ['Barbie', 'Panico', 'Shazam', 'Batman', 'Tiringa e o lobisomem']
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("jpv").innerHTML += `Posição do vetor ${i} - ${filmes[i]} <br>`
}
}