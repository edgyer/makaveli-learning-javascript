function CalcM2Rec(L,H) {
  return L * H
}

function CalcM2Circ(L) { 
    return (L * L)/3.14
}

function CalcM2Tri(B,H) {
    return (B * H)/2
}

console.log(CalcM2Rec(2,3))
console.log(CalcM2Circ(2))
console.log(CalcM2Tri(2,3))

//CALCULO M² VIDRO
function CalcM2Vidro(l,h){
  return m2 = l * h
  console.log(m2)
}

console.log(CalcM2Vidro.m2)

console.log(CalcM2Vidro(1.5,1.5) + 'm² do Vidro')

function M2Vidro(ValorVidro){
	return ValorVidro * m2
}
console.log('Valor do Vidro R$' + M2Vidro(90))

