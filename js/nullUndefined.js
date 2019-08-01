let valor // não inicializada Undefined
console.log(valor)

valor = null // Nenhum valor e não aponta para nenhum endereço no local de memória
console.log(valor)
// console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco) // Undefined não esta definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preço (Optar por esta opção para zerar um valor)
console.log(!!produto.preco)
console.log(produto)