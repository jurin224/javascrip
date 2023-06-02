var listaUsuarios = []


listaUsuarios = JSON.parse(localStorage.getItem(`bdusuarios`))
if (listaUsuarios == null) {
    listaUsuarios = []
}
exibirUsuario()

console.log(listaUsuarios)

function validarCadastro(nome1, nome2, senha1, senha2) {
    if (nome1 != `` && nome2 != `` && senha1 != `` && senha2 != ``) {
        return true
    } else {
        return false
    }
}

function jpv() {
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value
    var senha1 = document.getElementById("senha1").value
    var senha2 = document.getElementById("senha2").value



    var possoCadastrar = validarCadastro(nome1, nome2, senha1, senha2)
    if (possoCadastrar == false) {
        alert(`Verifique os dados antes de cadastrar`)
        return
    }

    var usuario = {
        nome1: nome1,
        nome2: nome2,
        senha1: senha1,
        senha2: senha2
    }

    listaUsuarios.push(usuario)

    localStorage.setItem(`bdusuarios`, JSON.stringify(listaUsuarios))

    exibirUsuario()

    document.getElementById("nome1").value = ``
    document.getElementById("nome2").value = ``
    document.getElementById("senha1").value = ``
    document.getElementById("senha2").value = ``
    document.getElementById("nome1").focus()
}

function exibirUsuario() {
    document.getElementById("resultado").innerHTML = ``

    for (var i = 0; i < listaUsuarios.length; i++) {
        document.getElementById("resultado").innerHTML +=
            `<div> 
       <p> Nome:${listaUsuarios[i].nome1}</p>
       </div>`

    }
}

function botaolimpar() {
    listaUsuarios = []
    localStorage.getItem(`bdusuarios`, JSON.stringify(listaUsuarios))
    listaUsuarios()
}
