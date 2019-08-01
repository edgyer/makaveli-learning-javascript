var numero = 1 // Visível globalmente ou em função
{
    let numero = 2 // Let tem escopo de bloco
    console.log('dentro =', numero) // Let também faz busca caso não ache informação no escopo acima exemplo: let numero2 = 2
}
console.log('fora =', numero)

// Let tem escopo global, função e bloco.