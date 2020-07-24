/* import ClasseUsuario from './function' */

class Usuario {
    constructor(email,senha) {
        this.email = email
        this.senha = senha
        this.admin = false
    }
}
class Admin extends Usuario{
    constructor() {
        super()
        this.admin = true
    }
    isAdmin() {
        if(this.admin)
           return true
        else
           return false
    }
}

const user1 = new Usuario('email@teste.com','teste123')
const adm1 = new Admin('email@teste.com','teste123')

//console.log(user1.isAdmin())
console.log(adm1.isAdmin())

const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
]

///preciso passar o objeto, o index e o array quando é um array de objetos
const age = usuarios.map((user, index, array) => { 
    return user.idade   
})
console.log(age)

const filter = usuarios.filter((user,index,array) => {
    if(user.idade > 18 && user.empresa == 'Rocketseat')
        return user
})
console.log(filter)

const find = usuarios.find((user,index,array) => {
    if(user.empresa === 'Google')
        return user
})
console.log(find)

const newAge = usuarios.filter((user,index,array) => {
    user.idade *= 2
    if(user.idade <= 50)
        return user
})
console.log(newAge)

//3.1
const arr = [1, 2, 3, 4, 5]
const newArr = arr.map(item => item + 10)
console.log(newArr)

//3.2
const usuario = {
    nome: 'Diego', 
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}
const mostraIdade = (usuario) => {return usuario.idade}
console.log(mostraIdade(usuario))

//3.3
const nome = 'Diego'
const idade = 23
const mostraUsuario = (nome, idade = 18) => {return {nome, idade}}
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

//3.4
const promise = () => {return new Promise((resolve, reject) => {return resolve})}
console.log(promise())

//4.1
const empresa = {
    noome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}
mostraEmpresa = ({noome,endereco:{cidade,estado}}) => {
    console.log(noome)
    console.log(cidade)
    console.log(estado)
}
mostraEmpresa(empresa)

//4.2
mostraInfo = ({nome,idade}) => { return `${nome} tem ${idade} anos` }
console.log(mostraInfo(usuario))

//5.1
const [x,...y] = arr
console.log(x)
console.log(y)

soma = (...numeros) => {
    let resultado = 0
    for(numero of numeros)
        resultado += numero
    return resultado
 }
console.log(soma(1,2,3,4,5,6))
console.log(soma(1,2))

//5.2
const usuario2 = {...usuario, nome: 'Gabriel'}
const usuario3 = {...usuario, endereco: {cidade: 'Lontras'}}
console.log(usuario2)
console.log(usuario3)

console.log(`O usuário ${nome} possui ${idade} anos`)

const usuario4 = {
    nome,
    idade
}
console.log(usuario4)

/*
const nuevo = new ClasseUsuario()
nuevo.info()
*/