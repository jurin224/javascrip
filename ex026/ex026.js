function cadastrar() {
    user = []
    localStorage.setItem(`entrada`, JSON.stringify(user))
}

function entrar() {
    for (var i in user) {
        if (document.getElementById("jpv").value == user[i].nome && document.getElementById("passw").value == user[i].senha) {
            document.getElementById("jpv").innerHTML = `Seja Bem-Vindo ${user[i].nome}`
            document.getElementById(`cadastrar`).innerHTML = ``
            document.getElementById("passw").innerHTML = ``
             return true
        } else {
            alert("Login ou senha invalidos")
            return false
        }
    }
}
function link(){}