const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // Mostrar elementos do índice do Array
console.log(valores[4]) // Índice não existente retorna undefined

valores[10] = 10 // Inserir valores em um índice vazio
console.log(valores)
console.log(valores.length) // Quantos elementos existem no Array
valores.push({id: 3}, false, null, 'teste')
console.log(valores) // Ideal não misturar
console.log(valores.pop()) // Retira ultimo valor do Array
delete valores[0] // Deleta valor do índice do Array
console.log(valores)
console.log(typeof valores) // Array é um Object