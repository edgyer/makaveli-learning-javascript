console.log('a =', a) // Variavel foi declarada porém undefined - hoisting = içamento
var a = 2
console.log('a =', a)

// Vale também dentro de funções
function teste() {
    console.log('a =', a) // Variavel foi declarada porém undefined - hoisting = içamento
    var a = 2
    console.log('a =', a)
}

teste()

console.log('b =', b) // Não existe Hoisting para Let
let b = 2
console.log('b =', b)