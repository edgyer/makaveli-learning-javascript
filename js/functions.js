

//Se ou If - else if - else
/*var nome = 'Victor';
var age = 26;
var casado = 'sim';

if (casado === 'sim'){
    console.log(nome + ' Casado!');
} else {
    console.log(nome + ' Espero casar em breve!');
}

//casado = false;
casado = true;*/

/*if (casado) {
    console.log('sim');
} else {
    console.log('não');
}*/

/*if (casado) {
    console.log('sim');
}

if (23 === "23"){
    console.log('Algo para imprimir...')
}*/

/*if (23 == "23"){
    console.log('Algo para imprimir...')
}*/

/*
var age = 20;

if (age < 20){
    console.log('John is a teenager.');
} else if (age >= 20 && age < 30){
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does John do?');


//interruptor/escolha
switch (job){
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.,');
        break;
    default:
        console.log('John does something else.');
}*/

//exercicio
/*var I_Victor = 26;
var A_Victor = 200;

var I_Hugo = 28;
var A_Hugo = 192;

var I_Bezerra = 26;
var A_Bezerra = 172;

var pontoVictor = I_Victor + 5 * A_Victor;
var pontoHugo = I_Hugo + 5 * A_Hugo;
var pontoBezerra = I_Bezerra + 5 * A_Bezerra;

console.log('Resultado:' + pontoVictor);
console.log('Resultado:' + pontoHugo);
console.log('Resultado:'+ pontoBezerra);

if (pontoVictor > pontoHugo && pontoVictor > pontoBezerra){
    console.log('Resultado:' + pontoVictor + ' Victor Ganhou!');
} else if (pontoHugo > pontoVictor && pontoHugo > pontoBezerra){
    console.log('Resultado:' + pontoHugo + ' Hugo Ganhou!');
} else if (pontoBezerra > pontoVictor && pontoBezerra > pontoHugo){
    console.log('Resultado:' + pontoBezerra + ' Bezerra Ganhou!');
}*/


/*
//Functions
//calculo de ano
function calcAno(AnoDeNasc){
    var idade = 2016 - AnoDeNasc;
    return idade;
}

var anoVictor = calcAno(1990);
var AnoHugo = calcAno(1948);
console.log(anoVictor, AnoHugo);



//calculo de aposentadoria
function anoAposent(nome, ano){
    var idade = calcAno(ano);
    var aposent = 65 - idade;

    if (aposent >= 0) {
         console.log(nome + ' aposentará em ' + aposent + ' anos');
    } else {
        console.log(nome  + ' aposentado');
    }
}

anoAposent('Victor', 1990);
anoAposent('Hugo', 1948);
*/

/*
//Functions
function someFun(par){
    //code
}

var someFun = function(par){
    //code
}

//Expreção
3 + 4;
var x = 3;

//Afirmaçoes
if (x ==== 5){
    //do something
}
*/

/*//Arrays(matriz)
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //acrescenta elemento em ultimo
john.unshift('Mr.'); //acrescenta elemento em primeiro
john.pop(); //remove ultimo elemento
john.shift(); //removel primeiro elemento
//alert(john.indexOf('Smith')); //retorna numero de sua posição
console.log(john);

if (john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher.');
}*/

/*
//Objects and Properties (Objetos e Propriedades)
var john = {
    name: 'john',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

/*
//Objects and Methods (Objetos e Metodos)
var john = {
    name: 'john',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth){
        return 2016 - this.yearOfBirth;
    }
};

//console.log(john.family[2]);
//console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

/*
//v2.0
var john = {
    name: 'john',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    yearOfBirth: 1950,
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

/*
//Loops and Iteration (Repetição e Interação)
for (var i = 0; i <= 10; i++){
    console.log(i);
}

for (var i = 10; i > 0; i--){
    console.log(i);
}

var names = ['Victor', 'Erick', 'Nicoly', 'Pamela', 'Yan'];
*/

/*
for (var i = 0; i < 5; i++){
    console.log(names[i]);
}
*/

//for loops
/*
for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}
*/

/*
//while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

var i = names.length - 1;
while(i >= 0) {
    console.log(names[i]);
    i--;
}

for (var i = 0; i <= 5; i++){
    console.log(i);

    if (i === 3){
        break;
    }
}

for (var i = 0; i <= 5; i++){
    if (i === 3){
        continue;
    }
    console.log(i);
}
*/

/*
var Nasc = [1992, 1982, 2000, 2001, 2015];
var Idade = [];

for (var i = 0; i < Nasc.length; i++){
    Idade[i] = 2018 - Nasc[i];
}

for (var i = 0; i < Idade.length; i++){
    if (Idade[i] >= 18){
        console.log('Pessoa ' + (i + 1) + ' tem ' + Idade[i] + ' anos e é maior de idade');
    } else {
        console.log('Pessoa ' + (i + 1) + ' tem ' + Idade[i] + ' e é menor de idade');
    }
}
*/

/*
function printIdadeMax(Nasc) {

    var Idade = [];
    var IdadeMax = [];

    for (var i = 0; i < Nasc.length; i++){
        Idade[i] = 2018 - Nasc[i];
    }

    for (var i = 0; i < Idade.length; i++){
        if (Idade[i] >= 18){
            console.log('Pessoa ' + (i + 1) + ' tem ' + Idade[i] + ' anos e é maior de idade');
            IdadeMax.push(true);
        } else {
            console.log('Pessoa ' + (i + 1) + ' tem ' + Idade[i] + ' e é menor de idade');
            IdadeMax.push(false);
        }
    }
    return IdadeMax;
}

var Nasc = [1992, 1982, 2000, 2001, 2015];
var Max1 = printIdadeMax(Nasc);
var Max2 = printIdadeMax([2012, 1915, 1999]);
*/
//Calculadora
a = prompt("entre com primero valor numérico:");
op = prompt("entre a operação: (+,-,/,*,%,r)");
b = prompt("entre com segundo valor numérico:");

if (op == "+"){
res = soma(a,b);
} else if (op == "-"){
    res = subtracao(a,b);
} else if (op == "*"){
    res = multiplicacao(a,b);
} else if (op == "/"){
    res = divisao(a,b);
} else if (op == "%"){
    res = porcentagem(a,b);
}

console.log('o resultado é:' + res);

function soma(a,b){
    r = a + b;
    return r;
} function subtracao (a,b){
    r = a - b;
    return r;
} function multiplicacao(a,b){
    r = a * b;
    return r;
} function divisao (a,b){
    r = a / b;
    return r;
} function porcentagem(a,b){
    r = (a / 100) * b;
    return r;
}
