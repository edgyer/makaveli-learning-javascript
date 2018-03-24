function calcIdade(AnoDeNasc){
    return(new Date()).getFullYear() - AnoDeNasc
}

function calcAnoAposentadoria(anoNasc){
    return 65 - calcIdade(anoNasc)
}

function anoAposent(ano){
    var a = calcAnoAposentadoria(ano)
    if (a >= 0) {
         return false
    } else {
         return true
    }
}

function isMaiorDeIdade(idade){
    var a = calcIdade(idade)
    if (a >= 18) {
      return true
    }
    return false
}

function arrIdades(ano){
  var a = []
  for (var i = 0; i < ano.length; i++ ){
    a.push(calcIdade(ano[i]))
  }
  return a
}

function arrMaiorDeIdade(idade){
    var a = []
    for (var i = 0; i < idade.length; i++){
      a.push(isMaiorDeIdade(idade[i]))
    }
    return a
}

function arrAnoAposentadoria(ano){
  var a = []
  for (var i = 0; i < ano.length; i++ ){
    a.push(anoAposent(ano[i]))
  }
  return a
}

function printIdadeMax(Nasc) {
    var Idade = arrIdades(Nasc)
    var Maior = arrMaiorDeIdade(Nasc)
    var Aposentado = arrAnoAposentadoria(Nasc)
    while(Idade.length - 1 >= 0){
      pos = Idade.length - 1
      var x = (Idade[pos] >= 18) ? "é MAIOR de idade" : "é menor de idade"
      var y = (Aposentado[pos] == true) ? "é APOSENTADO" : "NÃO é aposentado"
      console.log("Pessoa N:", pos, "tem", Idade[pos], "anos e", x, "e", y)
      Idade.pop()
      Aposentado.pop()
    }
}
printIdadeMax([1992,1994,2017,1952])