# Aprendendo-Javascript
## Oque é? 
Javascript é uma linguagem sem tipagem de dados, multiparadigma, de proposito geral.

## Funções
Uma função em javascript é composta por function segido da assinatura da função que é composta do seu nome e suas entradas.
uma função pode ainda retorar coisas, ou chamar outras funções.

## Tipos primitivos de dados
Para declarar uma variavel basta colocar var seguido do nome da variavel e é opcional atribuir um valor, caso nenhum valor seja atribuido o valor da variavel será undefined.

## são 6 os tipos de dados primitivos que as variaveis javascript aceitam:

* number para valores numericos
* string string para um conjuto de caracteres
* boolean  para armazenar valores logicos verdairo (true) ou falso (false)
* undefined caso nenhum valor seja atribuido o valor da variavel será undefined
* symbol (ECMAScript 6)
* null é uma variavel que aponta para uma região de memória nula, este tipo de variavel não deve ser usado, pois normalmente traz tratamentos muitas vezes irracionais para o seu programa, como por exemplo pergutar "pessoa você existe?" https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/

## E ainda podemos atribuir um objeto a uma variavel em javascript.
O nome desse tipo é JSON. Que significa JavaScript Object Notation

## Exemplo de um json
```
{
  "bindHttp": { <- objetc
    "ip":"0.0.0.0", <- string
    "port":3000, <- num
    "ipv4":true <- bool
  }
}
```
## Operadores de atribuição
* Atribuição <- Operador encurtado ```x = y``` Significado ```x = y```
* Atribuição de adição <- Operador encurtado ```x += y``` Significado ```x = x + y```
