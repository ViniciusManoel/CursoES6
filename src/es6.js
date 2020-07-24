//import somaf, { sub } from './funcoes'
//import * as funcoes from '../funcoes'

import axios from 'axios'

//exercício 1 - módulo 2
import classeUsuario, {idade as idadeUsuario} from './function'

/* Classes
class List {
    constructor() {
        this.data = []
    }

    addData(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class todoList extends List{
    constructor() {
        super()
        this.usuario = 'Vinicius'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

class Matematica{
    static soma(a,b){
        return a+b
    }
}

const minhaLista = new todoList()
document.getElementById('app').onclick = function() {
    minhaLista.addData("Novo Todo")
    minhaLista.mostraUsuario()
    console.log(Matematica.soma(2,3))
}
*/
/* Arrays 
const arr = [1,2,3,4,8,9]
const newArr = arr.map(function(item,index) {
    return item * index
})
console.log(newArr)

const sum = arr.reduce(function(total, next) {
    return total + next
})
console.log(sum)

const filter = arr.filter(function(item) {
    return item % 2 == 0
})
console.log(filter)

const find = arr.find(function(item) {
    return item == 4
})
console.log(find)
*/
/* Arrow functions 
const arr = [1,2,3,4,8,9]
const newArr = arr.map(item => item * 2)
console.log(newArr)

const test = () => ({nome: "Vinícius"})/*'teste' [1,2,3]*/
/* console.log(test()) */

/* Valores padrão
function soma(a = 3,b = 6) {
    return a + b
}
*/
/*
const soma = (a = 3,b = 6) => a + b

console.log(soma(1,2))
console.log(soma(1))
console.log(soma())

/* Desestruturação 
const usuario = {
    nome: 'Vinícius',
    idade: 27,
    endereco: {
        cidade: 'São José do Alegre',
        estado: 'MG'
    }
}
/*
const {nome, idade, endereco: {cidade}} = usuario
function mostraNome({nome, idade, endereco:{cidade}}) {
    console.log(nome)
    console.log(idade)
    console.log(cidade)
}

mostraNome(usuario)


/* Operadores rest e spread 
//REST
    //objetos:
const {nome, ...resto} = usuario
console.log(nome)
console.log(resto)
    //arrays:
const[a,b,...c] = arr
console.log(a) 
console.log(b) 
console.log(c) 
    //funções:
function novaSoma(...params) {
    return params.reduce((total,next) => total + next)
}

console.log(novaSoma(1,2,3,4567))

//SPREAD
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    time: 'Corinthians'
}
const usuario2 = {...usuario1, nome: 'Fernando', time:'Palmeiras'}
console.log(usuario2)

const nomine = 'Vinícius'
const age = 27 
    //forma comum:
console.log('Meu nome é '+ nomine +' e tenho '+ age +' anos')
    //template literal:
console.log(`Meu nome é ${nomine} e tenho ${age} anos`)

//Object short syntax
const usuario3 = {
    nomine,
    age,
    idioma: 'Latim'
}

console.log(usuario3)

console.log(funcoes.som(1,2))
console.log(funcoes.sub(4,2))
console.log(funcoes.mult(4,2))
*/

//Módulo 2: 

/*webpack server */
//alert('chuck norris')

// exercício 1 módulo 2

classeUsuario.info()
console.log(idadeUsuario)


//Async e await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')},2000)
})

/* chamada comum de uma promise
minhaPromise()
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})
*/
// Com async e await:
/*
async function executaPromise() {
    //const response = await minhaPromise()
    //console.log(response)
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}
*/

//async await com arrow functions:
const executaPromise = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}
executaPromise()

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        }
        catch (err){
            console.warn('Erro na API')
        }
    }
}
Api.getUserInfo('diego3g')

//módulo 3 - exercício 1:
let sec = 0
const delay = () => new Promise(resolve => 
    setTimeout(resolve(sec+'s'), 1000),
    sec += 1
    )
const umPorSegundo = async () => {
    console.log(await delay())
    console.log(await delay())
    console.log(await delay())
}
umPorSegundo()


//módulo 3 - exercício 2:
const getUserFromGithub = async (user) => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${user}`)
        console.log(resp)
    }
    catch(err) {
        console.log('Usuário não existe')
    }
}

getUserFromGithub('ViniciusManoel')
getUserFromGithub('ViniciusManoel123')