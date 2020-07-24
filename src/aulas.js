// var inputElement = document.querySelector('input[name=nome]')
        // var btnElement = document.querySelector('button.botao')
        // btnElement.onclick = function(){
        //     var text = inputElement.value;
        //     alert(text)
        // }
var linkElement = document.createElement('a')
linkElement.setAttribute('href','https://www.google.com.br')
linkElement.setAttribute('title','Site do Google')
var textElement = document.createTextNode('Acessar o site')
linkElement.appendChild(textElement)
var containerElement = document.querySelector('#app')
containerElement.appendChild(linkElement)

var boxElement = document.querySelector('.box')
boxElement.style.width = 100
boxElement.style.height = 100
boxElement.style.backgroundColor = '#f00'

var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')

var textos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTexto() {
	listElement.innerHTML = ''

	for (texto of textos) {
		var textElement = document.createElement('li')
		var todoTexto = document.createTextNode(texto)

		var linkElement = document.createElement('a')
		var linkTexto = document.createTextNode('Excluir')

		linkElement.setAttribute('href','#')

		var pos = textos.indexOf(texto)
		linkElement.setAttribute('onclick','deleteTodo('+ pos + ')')

		linkElement.appendChild(linkTexto)

		textElement.appendChild(todoTexto)
		textElement.appendChild(linkElement)
		listElement.appendChild(textElement)
		linkElement.appendChild(linkTexto)

	}
}

renderTexto()

function addTodo() {
	var todoText = inputElement.value
	textos.push(todoText)
	inputElement.value = ''
	renderTexto()
	saveToStorage()
}

btnElement.onclick = addTodo

function deleteTodo(pos) {
	textos.splice(pos,1)
	renderTexto()
	saveToStorage()
}

function saveToStorage() {
	localStorage.setItem('list_todos',JSON.stringify(textos))
}

//trabalhando com Ajax
/* 
var xhr = new XMLHttpRequest()
xhr.open('GET','https://api.github.com/users/ViniciusManoel')
xhr.send(null)
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText))
	}
} 
*/

//trabalhando com promises junto com ajax	
/* var testPromise = function(){
	return new Promise (function(resolve, reject) {

		var xhr = new XMLHttpRequest()
		xhr.open('GET','https://api.github.com/users/ViniciusManoel')
		xhr.send(null)
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText))
				} else {
					reject('Erro na requisição')
				}
			}
		}

	})
}

testPromise() */
axios.get('https://api.github.com/users/ViniciusManoel') // Usando agora biblioteca do axios
	.then(function(response){
		console.log(response)
	})
	.catch(function(error){
		console.warn(error)
	})
	