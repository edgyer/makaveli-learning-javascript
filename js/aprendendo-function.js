/*
var helloWorld = function(){
  return function(){
    return 'helloWorld'
  }
}
console.log(helloWorld)
console.log(helloWorld())
console.log(helloWorld()())
*/

/*
var pessoa = {
  nome: 'João',
  idade: 20,
  getIdade: function() {
    return this.idade;
  }
}
console.log(pessoa)
console.log(pessoa.getIdade)
console.log(pessoa.getIdade())
*/
/*
var getIdade = function() {
    return this.idade
}

var pessoa = {
  nome: 'João',
  idade: 20,
  getIdade: getIdade
}
console.log(pessoa.getIdade())
console.log(getIdade.call(pessoa))
console.log(getIdade.apply(pessoa))
*/

/*
var getIdade = function(extra) {
    return this.idade + extra
}

var pessoa = {
  nome: 'João',
  idade: 20,
  getIdade: getIdade
}
console.log(pessoa.getIdade(2))
console.log(getIdade.call(pessoa, 2))
console.log(getIdade.apply(pessoa, [2]))
*/

/*
var getIdade = function(extra) { // (extra1, extra 2..etc)
    //console.log(arguments) //<- variavel inplicita = como acessar argumentos
    return this.idade + extra
}

var pessoa = {
  nome: 'João',
  idade: 20,
  getIdade: getIdade
}
console.log(pessoa.getIdade(2, 4))
console.log(getIdade.call(pessoa, 2, 4))
console.log(getIdade.apply(pessoa, [2, 4]))
*/

//Funções Contrutoras vs Funções Fábrica
/*
//Funções Fábrica:(factory function)
var criarPessoa = function(nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(criarPessoa('Pedro', 20))
console.log(criarPessoa('Maria', 30))
*/

//Função Construtora:(constructor function)
/*
var Pessoa = function (nome, idade) { //Inicia com letra maiscula Funções construtoras tem por convenção lembrar o uso do operador 'new'.
  this.nome = nome
  this.idade = idade
}

console.log(new Pessoa('Pedro', 20)) //Operador 'new' cria este objetos por meio do 'this'.
console.log(new Pessoa('Maria', 30)) //Ele também passa para o objeto os parametros e ele faz essa atribuição por meio do 'this'.
//NUNCA ESQUEÇA O OPERADOR 'new' SE NÃO VOCÊ VAI ESTAR SOBRESCREVENDO OU DEFININDO (nome, idade) JÁ QUE O 'this' vai estar se referindo a ele.
*/

//Closures: 'Encerramento Encarceiramento'
/*
var helloWorld = function(){
  var message = 'Hello World!'
  return function(){
    return message
  }
}
console.log(helloWorld()()) //chamando função interna

var fnHelloWorld = helloWorld()
console.log(fnHelloWorld())
*/

/*
//CUIDADO COM ESCOPO GOBLAL
var counter = 0
var add = function() {
  return counter++
}

console.log(add())
console.log(add())
console.log(add())

var itens = []
var add = function(item) {
  itens.push(item)
  return item
}
console.log(add('A'))
console.log(add('B'))
console.log(add('C'))
console.log(add()) //VARIAVEL ADD ALTERADA (CUIDADO!!!) OPERAÇÃO ADD SENDO ALTERADA
*/
/*
//COMO ESCAPAR? - ENCAPSULAR USANDO OBJETO
var counter = {
  value: 0,
  add: function(){
    return ++this.value
  } 
}
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
//javascript não tem modificadores de visibilidade como privat public protect então corremos o risco de acessar diretamente uma propriedade interna como por exemplo 'counter'
counter.value = undefined
console.log(counter.add())//tentando acrescentar novamente retorna 'NaN'
//lembrando então que é melhor fazer encapsulamento por meio de funções

var itens = {
  value: [],
  add: function(item){
    this.value.push(item)
    return this.value
  }
}
console.log(itens.add('A'))
console.log(itens.add('B'))
console.log(itens.add('C'))

console.log(counter.add()) // variavel não alterada (ok!joinha) forma certa de encapsular ou escapar do escopo global
*/
/*
//ENCAPSULAMENTO POR MEIO DE FUNÇÃO (OK!JOINHA)
var counter = function(){
  var value = 0
  var add = function(){
    return ++value
  }
}
console.log(counter.value) //problema resolvido!!!
console.log(counter.add) //problema gerado***

//resolvendo problema com função fábrica(factory function)
var createCounter = function(){
  var value = 0
    return {
      add: function(){
      return ++value
    }
  }
}
var counter = createCounter()
console.log(counter.value) //problema resolvido!!!
console.log(counter.add()) //problema resolvido!!!
console.log(counter.add()) //problema resolvido!!!
console.log(counter.add()) //problema resolvido!!!
*/

/*
//resolvendo problema com função construtora(constructor function)
var Counter = function(){
  var value = 0
  this.add = function(){
    return ++value
  }
}
var counter = new Counter()//diferença como é função construtora nescessita do 'new'
console.log(counter.value) //problema resolvido!!!
console.log(counter.add()) //problema resolvido!!!
console.log(counter.add()) //problema resolvido!!!
console.log(counter.add()) //problema resolvido!!!
*/

/*
//IIFE - immediately-invoked function expression (função'expreção' imediatemente invocada) bastante utilizado em Module Pattern
var counter = (function(){
  var value = 0
  return {
    add: function(){
      return ++value
    }
  }
})()
console.log(counter.value)
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
*/

/*
var counter = (function(){
  var value = 0
  return {
    add: function(){
      return ++value
    },
    reset: function(){
      value = 0
    }
  }
})()
console.log(counter.value)
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
counter.reset()
console.log(counter.add())
*/


//revealing module pattern(revelando padrão de módulo) pattern melhorado Outra possiblidade
var counter = (function(){
  var _value = 0
  var _add = function(){ //privado 'tudo que for privado prefixar com _ isso é apenas uma convenção'
    return ++_value
  }
  var _reset = function(){ //privado
    _value = 0
  }  
  return { //publico
    add: _add,
    reset: _reset
  }
})()
console.log(counter.value)
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
counter.reset()
console.log(counter.add())