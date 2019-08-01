let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Negando 2 vezes, não não 1 = verdadeiro
console.log(!isAtivo) // Negando 1 vez, não 1 = falso

console.log('Os verdadeiros...')

console.log(!!1)
console.log(!!-1)
console.log(!!' ')
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Se a atribuíção for verdadeira

console.log('Os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Se a atribuíção for falsa
console.log('Pra finalizar...')

console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || 'epa'))
console.log(!!('' || null || 0 || '' || 123))

console.log('' || null || 0 || ' ')
console.log('' || null || 0 || 'epa')
console.log('' || null || 0 || '' || 123)

let nome = ''
console.log(nome || 'Desconhecido')