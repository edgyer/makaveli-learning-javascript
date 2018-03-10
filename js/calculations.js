
function CalcM2() {
  return L * H;
}

function CalcM2Circ() {
    return (L * L)/3.14;
}


function CalcM2Tri() {
    return (B * H)/2;
}


function calcIdade(AnoDeNasc){
    return(new Date()).getFullYear() - AnoDeNasc;
}

function calcAnoAposentadoria(anoNasc){
    return 65 - calcIdade(anoNasc);
}

function anoAposent(nome, ano){
    var a = calcAnoAposentadoria(ano)
    if ( a >= 0) {
         return [false, a];
    } else {
         return [true, 0];
    }
}

function isMaiorDeIdade(idade){
    if (idade>=18){
      return true;
    }
    return false;
}

function arrMaiorDeIdade(idade){
    var a = []
    for (var i = 0; i < idade.length; i++){
      a.push(isMaiorDeIdade(idade[i]))
    }
    return a;
}

function arrIdades(ano){
  var a = []
  for (var i = 0; i < ano.length; i++ ){
    a.push(calcIdade(ano[i]))
  }
  return a;
}

function printIdadeMax(Nasc) {
    var Idade = arrIdades(Nasc);
    var IdadeMax = arrMaiorDeIdade(Idade);
    console.log(IdadeMax);
    while(IdadeMax.length - 1 >= 0){
      pos = IdadeMax.length - 1
      var x = Idade[pos] ? "é maior de idade" : "é menor de idade";
      console.log("Pessoa " + pos + " tem " + Idade[pos] + " e "+ x);
      IdadeMax.pop()
    }
}

printIdadeMax([1924,1252,2010,2000,1992,1990,1942,2020]);

function calculadora(calc, val1, val2){
 a = parseFloat(val1);
 b = parseFloat(val2);
  switch (calc){
    case "/":
      return divisao(a,b);
    case "*":
      return multiplicacao(a,b);
    case "-":
      return subtracao(a,b);
    case "+":
      return soma(a,b);
    case "%":
      return porcentagem(a,b);
  }
}

function soma(a,b){
    return a + b;
}

function subtracao (a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao (a,b){
    return a / b;
}

function porcentagem(a,b){
    return (a / 100) * b;
}
