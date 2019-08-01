function CadastroPrefis(Indice, Codigo, Kgm) {
    this.Perfil = Indice
    this.Codigo = Codigo
    this.Kgm = Kgm
    for (let i = 1; i <= Indice; i++) {
		this[i]
    }
}

Perfil = new CadastroPrefis()
Perfil[1] = new CadastroPrefis("1", "D-082", 0.349)
Perfil[2] = new CadastroPrefis("2", "TMR-1381", 0.196)
Perfil[3] = new CadastroPrefis("3", "PR-001", 1.236)

//KILO METRO(kg/m) PERFIL
function kiloMetro(Kgm) {
	return Perfil.kgm = Kgm
}
console.log(kiloMetro(Perfil[1].Kgm) + 'Kg/m (kilo metro)')

//CALCULO PERFIL BRUTO
function  CalcKgPerfilBruto(Barra) {
	return Perfil.kgm * Barra
}
console.log(CalcKgPerfilBruto(6) + 'Kg (barra/bruto)')

//CALCULO PERFIL LIQUIDO
function  CalcKgPerfilLiquido(MetroBarra) {
	return Perfil.kgm * MetroBarra
}
console.log(CalcKgPerfilLiquido(3) + 'Kg (líquido)')

//VALOR PERFIL
function ValorAluminio(ValorAlum){
	return ValorAlum
}
console.log('R$' + ValorAluminio(18) + 'kg Valor Natural')

//VALOR PINTURA
function ValorPintura(ValorPint){
	return ValorPint
}
console.log('R$' + ValorPintura(3) + 'kg Valor Pintura')

//CALCULO VALOR BARRA/BRUTO
function ValorBarraBruto(){
	return ValorBruto = (CalcKgPerfilBruto(6) * ValorAluminio(18) + CalcKgPerfilBruto(6) * ValorPintura(3))
}
console.log('Valor Bruto R$' + ValorBarraBruto().toFixed(2))

//CALCULO VALOR BARRA/LIQUIDO
function ValorBarraLiquido(){
	return ValorLiquido = (CalcKgPerfilLiquido(3) * ValorAluminio(18) + CalcKgPerfilLiquido(3) * ValorPintura(3)) 
}
console.log('Valor Liquído R$' + ValorBarraLiquido().toFixed(2))