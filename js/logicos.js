/*

Operador 'And ||'

v And v -> v
v And f -> f
f And ? -> f

Operador 'Or &&'

v Or ? -> v
f Or v -> v
f Or f -> f

Operador 'Xor !='

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v - f
!f -> v

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))