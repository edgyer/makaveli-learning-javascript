//KILO METRO(kg/m) PERFIL D082
function kiloMetro(KGm) {
	return D082 = KGm
}
console.log(kiloMetro(0.349) + 'Kg/m(kilo metro)')

//CALCULO PERFIL BRUTO
function  CalcKgPerfilBruto(Barra) {
	return D082 * Barra
}
console.log(CalcKgPerfilBruto(6) + 'Kg(barra/bruto)')

//CALCULO PERFIL LIQUIDO
function  CalcKgPerfilLiquido(MetroBarra) {
	return D082 * MetroBarra
}
console.log(CalcKgPerfilLiquido(3) + 'Kg(líquido)')

//CALCULO VALOR PERFIL
function ValorAluminio(ValorAlum){
	return ValorAlum
}
console.log('R$' + ValorAluminio(18) + 'kg Valor Natural')

//CALCULO VALOR PINTURA
function ValorPintura(ValorPint){
	return ValorPint
}
console.log('R$' + ValorPintura(3) + 'kg Valor Pintura')

//CALCULO VALOR BARRA/BRUTO
function ValorBarraBruto(ValorBruto){
	return ValorBruto = (CalcKgPerfilBruto(6) * ValorAluminio(18)) + (CalcKgPerfilBruto(6) * ValorPintura(3))
}
console.log('Valor Bruto R$' + ValorBarraBruto())

//CALCULO VALOR BARRA/LIQUIDO
function ValorBarraLiquido(ValorLiquido){
	return ValorLiquido = (CalcKgPerfilLiquido(3) * ValorAluminio(18)) + (CalcKgPerfilLiquido(3) * ValorPintura(3)) 
}
console.log('Valor Liquído R$' + ValorBarraLiquido())

//CALCULO M² VIDRO
function CalcM2Vidro(l,h){
	return m2 = l * h
}
console.log(CalcM2Vidro(1.5,1.5) + 'm² do Vidro')

function M2Vidro(ValorVidro){
	return ValorVidro * m2
}
console.log('Valor do Vidro R$' + M2Vidro(90))