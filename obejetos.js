var listaCarros = []

//declarando um obejeto e informando os atributos
//todo objeto declaro com { }
var carro = {
    ano: `2020`,
    modelo: `Panameira`,
    marca: `Porshe`
}

//para exibir o atributo do obejto faço da seguinte forma
//objeto.atributo
console.log (carro.marca + ` - ` + carro.ano)
console.log (`${carro.marca} - ${carro.ano}`)

listaCarros.push(carro)

console.log (listaCarros.length)

carro = {
    ano: `1998`,
    modelo: `PAMPA`,
    marca: `Ford`,
    cor: `Azul`
}
listaCarros.push(carro)
console.log (listaCarros)

for (var pos in listaCarros){
    console.log (listaCarros[pos].modelo)
}