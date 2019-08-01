const prod1 = {} // Objeto é coleção de Chaves e Valores Também é possível Objeto dentro de Objeto
prod1.nome = 'Celular Ultra Mega' // Cria dinâmicamente dentro do Objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Criando Chaves com espaços EVITAR USAR ATRIBUTOS COM ESPAÇO

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

// { "nome": "Camisa Polo", "preco": 79.90 } JASON não é objeto, JASON é um formato textual de Objeto; Podemos gerar apartir de um Objeto um JASON (Comunicação entre Sistemas)
console.log(prod2)