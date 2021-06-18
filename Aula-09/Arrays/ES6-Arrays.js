const numeros = [10, 20, 30, 40, 50]

// Varreduras
console.log('Varredura com for..in (apresenta o indice)');
for (let indice in numeros) {
    console.log(indice)
}

console.log('Varredura com for..of (apresenta o valor)');
for (let indice in numeros) {
    console.log(indice)
}

console.log('Varredura com forEach (com funções callback');
numeros.forEach(function (valor) {
    console.log(valor)
});
console.log("")
numeros.forEach(valor => console.log(valor))

// Manipulação de dados

console.log('\nInserção com push (no fim)');
// Inserir um valor no fim
numeros.push(60);
console.log(numeros)

console.log('\nInserção com unshift (no começo)');
//Inserir um valor no começo
numeros.unshift(0);
console.log(numeros)

console.log('\nExclusão com pop (do fim)');
//Remover um valor do fim
numeros.pop()
console.log(numeros)

console.log('\nExclusão com shift (do começo)');
//Remover um valor do começo
numeros.shift();
console.log(numeros)

console.log('\nExclusão com splice');
//Inclusão de mais valores para teste
numeros.push(70, 80, 90);
console.log(numeros)

console.log('\nExlusão de 2 valores a partir de um indice 5 ');
//Remover a partir de um indice
const indice = 5;
const quantidade = 2;
numeros.splice(indice, quantidade);
console.log(numeros)

numeros.pop()

console.log('\nFind (busca pelo número 30)');
// Busca um valor no array
numeros.find(function (valor, indice) {
        console.log(valor == 30)
});

console.log("")
//Retorna o valor se encontrado
let busca = numeros.find((valor, indice) => valor == 30)
console.log(busca);

//Retorna undefined se o valor não for encontrado
busca = numeros.find((valor, indice) => valor == 70)
console.log(busca);

//Busca um indice array
busca = numeros.find((valor, indice) => indice == 4)
console.log(busca);

console.log('\nIndexOf (retorna o indice de um valor no array)');
//Retornar o indice da busca
console.log(numeros.indexOf(30));

//Retornar o -1 se não encontrado
console.log(numeros.indexOf(75));


//map
/* retorna um novo array com os dados de um array origem transformado
(sempre com o mesmo tamanho) */
console.log('\nmap')
console.log('(transformação dos valores de array gerando um novo array de mesmo tamanho)')

let resultado = numeros.map(n => n * 2)
console.log(numeros)
console.log(resultado)
console.log("")

const dobro = n => n * 2
const mais10 = n => n + 10
//Template String
const formataReal = n => `R$ ${parseFloat(n).toFixed(2).replace('.',',')}`

let resultado1 = numeros.map(dobro).map(mais10).map(formataReal)
console.log(numeros)
console.log(resultado1)












//reduce
/* Recebe uma função callback e (opcionalmente) um valor inicial
(se não for informado começa com o valor do indice zero) */
console.log('\nreduce (tranforma os valores de um array em um unico valor)')

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//sem valor inicial
console.log('\nSomatória')
const somatoria = numeros1.reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(somatoria)

//com valor inicial
console.log('\nSomatória com valor inicial 100')
const somatoria1 = numeros1.reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 100)
console.log(somatoria1)

//com valores lógicos
console.log('\nCom valores lógicos')

const logicos = [true, false, true, true]

const todosVerdadeiros = (acumulado, valor) => acumulado && valor
console.log(logicos.reduce(todosVerdadeiros))

const algumVerdadeiro = (acumulado, valor) => acumulado || valor
console.log(logicos.reduce(algumVerdadeiro))

//para entender
console.log('\n&& (passo a passo)')

logicos.reduce((acumulado, valor) => {
    console.log(acumulado, valor)
    console.log(acumulado && valor)
    return acumulado && valor
})

console.log('\n|| (passo a passo)')
logicos.reduce((acumulado, valor) => {
    console.log(acumulado, valor)
    console.log(acumulado || valor)
    return acumulado || valor
})


//concatenação
console.log('\nconcat')

const carros = ['fusca', 'brasilia', '147']
const motos = ['CG 125', 'Turuna', 'TT']
const ferroVelho = carros.concat(motos, 'mobilete')

console.log(carros)
console.log(motos)
console.log(ferroVelho)

console.log( [].concat(1,3,5.7,"João", true) )


// desestruturação (destructuring)
console.log('\ndesestruturação')

let [a, b, c, d, e] = numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log("")

let [x, y, z] = [a, b, c, d, e]

console.log(x)
console.log(y)
console.log(z)
console.log("")

let [n1, , n3] = [a, b, c, d, e]

console.log(n1)
console.log(n3)


//

//
console.log('\nrest')

function adicao(...numeros){
    return numeros.reduce((total, numero) => total += numero)
}
console.log(adicao(2, 4, 6, 8))

//
//
console.log('\nspread')

const numeros2 = [...numeros, 60, 70, 80, 90]
console.log(numeros2)

//
const numeros3 = [...numeros, 60, 70, 80, 90]
console.log(numeros3)