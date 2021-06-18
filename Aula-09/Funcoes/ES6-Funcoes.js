//Literal
console.log('\nFunção literal')
function somar(n1, n2){
    return n1 + n2
}
console.log( somar(10,20) )


//função anonima (armazenada em uma variavel)
console.log('\nFunção anônima')
const subtrair = function(n1, n2){
    return n1 - n2
}
console.log( subtrair(40,30) )

console.log('\nFunções em array')
const calculos = [somar, subtrair, function(n1, n2){return n1 * n2}]
console.log( calculos[0](60,50) )
console.log( calculos[1](60,50) )
console.log( calculos[2](60,50) )

console.log('\nFunções em objetos')
const obj = {adicao: somar,
                subtracao: subtrair}
console.log( obj.adicao(10, 15) )

console.log('\nParâmetros são opcionais e pré-definidos')
function somarVarios(n1, n2, n3 = 0, n4 = 10){
    return n1 + n2 + n3 + n4
}
console.log( somarVarios(2, 4, 6, 8, 10) )
console.log( somarVarios(2, 4, 6, 8) )
console.log( somarVarios(2, 4, 6) )
console.log( somarVarios(2, 4) )

console.log('\nFunções como parâmetro')
function apresentarResultado(n1, n2, operacao = somar){
    console.log(operacao(n1, n2) )
}
apresentarResultado(10, 20)
apresentarResultado(10, 20, subtrair)
apresentarResultado(10, 20, function(n1, n2){
    return n1 * n2
})
apresentarResultado(10, 20, (n1, n2) => n1 / n2)

console.log('\nFunções como parâmetro/retorno de outra função')
function calcular(fun){
    return fun(7,13)
}
console.log( calcular( somar) )

console.log('\nFunção dentro de outra função')
function somarTres(n1, n2){
    return function (n3){
        return n1 + n2 + n3
    }
}
const maisUm = somarTres(10,20)
console.log( maisUm(30) )
console.log( somarTres(2,4)(6) )

console.log('\nArrow Function')

//Literal
function dividirLiteral(n1, n2){
    return n1 / n2
}

//Anônima
const dividirAnonima = function (n1, n2){
    return n1 / n2
}

//Arrow function (com corpo uso de chaves para mais de uma linha de instrução)
const dividirArrowComCorpo = (n1, n2) => {
    return n1 / n2
}

// Arrow function (com uma linha de instrução)
const dividirArrow = (n1, n2) => n1 / n2

console.log(dividirArrow(9, 2))

// Arrow function sem parâmetros
function textoLiteral(){
    return "String de retorno da função literal"
}

const textoArrow = () => "String de retorno da Arrow function"

console.log(textoLiteral())
console.log(textoArrow())

//Funções Callback
console.log("\nFunções Callback")

// Exemplo forEach
console.log("\nCallback: Exemplo forEach")

const bandas = ["Black Sabbath", "Led Zeppelin", "Judas Priest"]

function mostrar(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}
bandas.forEach(mostrar)
console.log("")
bandas.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`))
console.log("")
bandas.forEach(nome => console.log(nome))

//Exemplo filter
console.log("\nCallback: Exemplo filter")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Forma "tradicional"
const pares1 = []
for(let n of numeros){
    if(n % 2 == 0){
        pares1.push(n)
    }
}
console.log(numeros)
console.log(pares1)
console.log("")

//Com filter
//Callback de função anônima
const pares2 = numeros.filter(function(n){
    return n % 2 == 0
})
// console.log(pares2)

// Callback de Arrow Function
const impares = numeros.filter(n => n % 2 != 0)
// console.log(impares)

// Atribuido Arrows Functions a variáveis
const filtraPares = n => n % 2 == 0
const filtraImpares = n => n % 2 != 0

const pares3 = numeros.filter(filtraPares)
const impares1 = numeros.filter(filtraImpares)

console.log(numeros)
console.log(pares3)
console.log(impares1)
console.log("")

//Exemplo DOM
console.log("\nCallback: Exemplo DOM")

document.getElementById('botao').onclick = function(){
    console.log('Evento indentificado e respondido pela função callback')
}
