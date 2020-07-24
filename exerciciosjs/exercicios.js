import ClasseUsuario from './function'
/*
var sexo = 'M'
resultado = (sexo === 'M')? 'Masculino' : 'Feminino'
console.log(resultado)
*/

/*
Aula interval e timeout
function teste(){
    console.log("Hello World")
}
setInterval(teste,1000)
setTimeout(teste,5000)
*/

/* Exercício 1 */
var endereco = {
rua: 'Rua dos Pinheiros',
numero: '1293',
bairro: 'Centro',
cidade: 'Sao Paulo',
uf: 'SP'
}

function ex1(e){
    console.log('O usuario mora em', e.cidade, '/',e.uf,", no bairro",e.bairro,", na",e.rua,", com n.",e.numero)
}

ex1(endereco)

/*exercicio 2*/
// var x = prompt("Digite o primeiro numero: ")
// var y = prompt("Digite o segundo numero")
var x = 605, y = 597

function pares(x,y) {
    if(x >= y) {
        for(i = y; i <= x; i++)
            if(i % 2 == 0)
                console.log(i);
    } else {
        for(i = x; i <= y; i++) 
            if(i % 2 == 0)
                console.log(i);
    }
}

pares(x,y)

// Exercício 3
function temHabilidade(skills) {
    a = skills.indexOf('Javascript')
    if(a != -1)
        return true
    else
        return false

}

var skills = ['Javascript','ReactJS','React Native']
console.log(r = temHabilidade(skills))

//Exercício 4
var anosEstudo = 7
function experiencia(anos) {
    if(anos <= 1)
        console.log('Iniciante')
    else 
        if(anos <= 3)
            console.log('Intermediario')
        else
            if(anos <= 6)
                console.log('Avancado')
            else
                console.log('Jedi Master')
}
experiencia(anosEstudo)

//Exercício 5

let usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript','ReactJS','Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails','Elixir']
    },
    {
        nome: 'Jorge Ignacio',
        habilidades: ['Latim','Grego Antigo']
    }
]

function userSkills(usuarios) {
    for(const iterator of usuarios) {
        console.log('O',iterator.nome,'possui as habilidades:',iterator.habilidades.join(', '))
    }
}

userSkills(usuarios)

//Exercício 6
var btnElement = document.querySelector('button.botao')
btnElement.onclick = function () {
    var boxElement = document.querySelector('#ex6')
    boxElement.style.width = 100
    boxElement.style.height = 100
    boxElement.style.backgroundColor = '#f00'
} && addItem

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var squareElement = document.querySelector('#ex6') //arrumar
squareElement.onmouseover = function () {
    var newColor = getRandomColor(); // #E943F0
    squareElement.style.width = 100
    squareElement.style.height = 100
    squareElement.style.backgroundColor = newColor
}

//Exercício 7
var listElement1 = document.querySelector('#ex6 ul')
var inputElement = document.querySelector('#ex6 input')
/*   var listElement1 = document.createElement("li")
var listElement2 = document.createElement("li")
var listElement3 = document.createElement("li")
var text1 = document.createTextNode('Diego')
var text2 = document.createTextNode('Gabriel')
var text3 = document.createTextNode('Lucas')
listElement1.appendChild(text1)
listElement2.appendChild(text2)
listElement3.appendChild(text3)

var containerElement = document.querySelector('#ex6')
containerElement.appendChild(listElement1)
containerElement.appendChild(listElement2)
containerElement.appendChild(listElement3) */

var itens = //JSON.parse(localStorage.getItem('list_itens')) || []
[
    'Diego',
    'Gabriel',
    'Lucas'
]

function render () {
    listElement1.innerHTML = ''

    for(item of itens) {
        var textElement = document.createElement('li')
        var itemText = document.createTextNode(item)

        textElement.appendChild(itemText)
        listElement1.appendChild(textElement)
    }
}

render()

function addItem() {
    var itemText = inputElement.value
    itens.push(itemText)
    inputElement.value = ''
    render()
}

/* Exercícios 4ª seção*/

/* Exercício 1*/
var idade = 18
function checaIdade(idade) {
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
                if(idade >= 18) {
                console.log('resolve')
                resolve()
                } else {
                console.log('reject')
                reject()
            }
        })   
    })
}

checaIdade(idade)
    .then(function() {
        console.log('Maior de idade')
    })
    .catch(function() {
        console.log('Menor de idade')
    })

/*Exercício 2*/

var userInput = document.querySelector('#ex7 input')
var ul = document.querySelector('#ex7 ul')

function preencher(dados) {
    for(us of dados) {
        const li = document.createElement('li')
        li.innerHTML = us.description
        ul.appendChild(li)
    }
}

function adicionar(){
    var userName = userInput.value
    const url = 'https://api.github.com/users/' + userName + '/repos'
    axios.get(url) // Usando agora biblioteca do axios
	.then(function(response){
        preencher(response.data)
	})
	.catch(function(error){
        console.log(url+'não encontrado!')
		console.warn(error)
	})
}

const nuevo = new ClasseUsuario
nuevo.info()