function calcIdade(anoNasc){
    return(new Date()).getFullYear() - anoNasc
}

function calcAnoAposentadoria(anoNasc){
    return 65 - calcIdade(anoNasc)
}

function anoAposent(ano){
    let a = calcAnoAposentadoria(ano)
    if (a >= 0) {
         return false
    } else {
         return true
    }
}

function isMaiorDeIdade(idade){
    let a = calcIdade(idade)
    if (a >= 18) {
      return true
    }
    return false
}

function arrIdades(ano){
  let a = []
  for (let i = 0; i < ano.length; i++ ){
    a.push(calcIdade(ano[i]))
  }
  return a
}

function arrMaiorDeIdade(idade){
    let a = []
    for (let i = 0; i < idade.length; i++){
      a.push(isMaiorDeIdade(idade[i]))
    }
    return a
}

function arrAnoAposentadoria(ano){
  let a = []
  for (let i = 0; i < ano.length; i++){
    a.push(anoAposent(ano[i]))
  }
  return a
}

function printIdadeMax(Nasc) {
    let Idade = arrIdades(Nasc)
    let Maior = arrMaiorDeIdade(Nasc)
    let Aposentado = arrAnoAposentadoria(Nasc)
    while(Idade.length - 1 >= 0){
      pos = Idade.length - 1
      let x = (Idade[pos] >= 18) ? "é MAIOR de idade" : "é menor de idade"
      let y = (Aposentado[pos] == true) ? "é APOSENTADO" : "NÃO é aposentado"
      console.log("Pessoa N:", pos, "tem", Idade[pos], "anos e", x, "e", y)
      Idade.pop()
      Maior.pop()
      Aposentado.pop()
    }
}
printIdadeMax([1992,1994,2017,1952])