import api from './api'

class App {
    constructor() {
        this.repositories = [

        ]
        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers()
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepositories(event)
    }
    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id','loading')
            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }
    async addRepositories (event) {
        event.preventDefault()

        const repoInput = this.inputEl.value
        console.log(repoInput)
        if(repoInput.length === 0)
            return;
        this.setLoading()
        try {
            const response = await api.get(`/repos/${repoInput}`)

            const {name, description, html_url, owner: {avatar_url}} = response.data
            
            console.log(response)

            this.repositories.push({
                name,//name:'rocketseat.com.br',
                description,//description:'Tire a sua ideia do papel e dê vida a sua startup.',
                avatar_url,//avatar_url:'https://avatars0.githubusercontent.com/u/28929274?v=4',
                html_url//html_url: 'https://github.com/react-community/react-navigation'
            })
            this.inputEl.value = ''
            this.render()
        }
        catch {
            this.inputEl.value = ''
            alert('O repositório não existe')
        }
        this.setLoading(false)
    }
    render() {
        this.listEl.innerHTML = ''
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src',repo.avatar_url)

            let titlEl = document.createElement('strong')
            titlEl.appendChild(document.createTextNode(repo.name))

            let descEl = document.createElement('p')
            descEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target','_blank')
            linkEl.setAttribute('href',repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titlEl)
            listItemEl.appendChild(descEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })
    }
}

new App()