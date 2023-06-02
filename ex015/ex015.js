
function jpv() {
    var num = document.getElementById("name").value
    num = Number(num)
    var qt = 1
    document.getElementById("jpv").inerHTML = `Tabuada do ${num}`
    while (qt < 11) {
        var res = num * qt
        document.getElementById("jpv").innerHTML += `${num} x ${qt} = ${res} <br>`
        qt++
    }
}
console.log(num)