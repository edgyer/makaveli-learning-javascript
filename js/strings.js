const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não gera erro retorna vazio
console.log(escola.charCodeAt(3)) // Tabela Unicode
console.log(escola.indexOf('3')) // Retorna o indice associado
console.log(escola.substring(1)) // Oculta o indice determinado
console.log(escola.substring(0,3)) // Oculta o indice determinado de x a y e não inclui o último indice
console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log('Escola ' + (escola) + ("!")) // Concatenação
console.log(escola.replace(3, 'e')) // Substituí indice po valor desejado
console.log(escola.replace(/\d/, 'e')) // Substituí todos valores de indice pelo valor desejado // /\d/g = global
console.log(escola.replace(/\w/g, 'e')) // Substituí todos valores de indice pelo valor desejado
console.log('Ana,Maria,Pedro'.split(',')) // Quebrando e gerando Array apartir da ","
console.log('Ana,Maria,Pedro'.split(/,/)) // Quebrando e gerando Array apartir da "/"
// .split pode ser usado em Regex... Pesquisar