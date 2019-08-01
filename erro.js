function tratarErroeLancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroeLancar(e)
    } finally { // Mesmo que ocorra Erro ou Não sempre sera executado
        console.log('Final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)

/*
const obj = { name: 'Roberto' } // Chamando corretamente
imprimirNomeGritado(obj)
*/