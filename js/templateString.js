const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` // Considera quebras de linhas e espaços em branco
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Function Arrow ou Função simplificada
console.log(`Ei... ${up('Cuidado')}!`) // toUpperCase Torna todos caracteres maiúsculos