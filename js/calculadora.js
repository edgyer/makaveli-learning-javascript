function calculadora(calc, val1, val2){
 a = parseFloat(val1)
 b = parseFloat(val2)
  switch (calc){
    case "/":
      return divisao(a,b)
    case "*":
      return multiplicacao(a,b)
    case "-":
      return subtracao(a,b)
    case "+":
      return soma(a,b)
    case "%":
      return porcentagem(a,b)
  }
}

function soma(a,b){
    return a + b
}

function subtracao (a,b){
    return a - b
}

function multiplicacao(a,b){
    return a * b
}

function divisao (a,b){
    return a / b
}

function porcentagem(a,b){
    return (a / 100) * b
}

console.log(calculadora("+", 2, 2))
console.log(calculadora("-", 10, 5))
console.log(calculadora("*", 10, 2))
console.log(calculadora("/", 10, 2))
console.log(calculadora("%", 200, 50))