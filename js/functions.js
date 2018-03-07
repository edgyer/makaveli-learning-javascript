function helloWorld(){
  console.log("hello motherfucking world!");
}

helloWorld();
/*
javascript é uma linguagem sem tipagem de dados, multiparadigma, de proposito geral.
 */


/*
Uma função em javascript é composta por function segido da assinatura da função que é composta do seu nome e suas entradas.
uma função pode ainda retorar coisas, ou chamar outras funções.
 */

/*
Tipos primitivos de dados.
Para declarar uma variavel basta colocar
var seguido do nome da variavel e é opcional atribuir um valor, caso nenhum valor seja atribuido o valor da variavel será undefined.
são 6 os tipos de dados primitivos que as variaveis javascript aceitam.
number para valores numericos
string string para um conjuto de caracteres
boolean  para armazenar valores logicos verdairo (true) ou falso (false)
undefined caso nenhum valor seja atribuido o valor da variavel será undefined
symbol (ECMAScript 6)
null é uma variavel que aponta para uma região de memória nula, este tipo de variavel não deve ser usado, pois normalmente traz tratamentos muitas vezes irracionais para o seu programa, como por exemplo pergutar "pessoa você existe?"
https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/

E ainda podemos atribuir um objeto a uma variavel em javascript.
O nome desse tipo é JSON. Que significa JavaScript Object Notation

Exemplo de um json

{
  "bindHttp": { <- objetc
    "ip":"0.0.0.0", <- string
    "port":3000, <- num
    "ipv4":true <- bool
  }
}

*/

/* Calculos de m²

// Variáveis
var L = prompt('Qual a Largura?');
var H = prompt('Qual a Altura?');
var B = prompt('Qual a Base?');

// m² de Quadrados ou Retângulos
function CalcM2() {
    m2 = L * H;
    console.log("o m² do Retângulo ou Quadrado:",L,"e",H,"é:",m2);
}

CalcM2();

// m² de Círculos
function CalcM2Circ() {
    m2 = (L * L)/3.14;
    console.log("o m² da Circunferência de um R:",L,"é:",m2);
}

CalcM2Circ();

// m² de Triângulos
function CalcM2Tri() {
    m2 = (B * H)/2;
    console.log("o m² do Triângulo: base",B,"e altura:",H,"é:",m2);
}

CalcM2Tri();

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
