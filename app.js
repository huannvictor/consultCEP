let submitButton    = document.querySelector('#app form button')
let cepField    = document.querySelector('#app form input')
let content         = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event){
    event.preventDefault()
    
    let cepCode = cepField.value

    cepCode = cepCode.trim()
    cepCode = cepCode.replace(' ','')
    cepCode = cepCode.replace('.','')

    axios
        .get('https://viacep.com.br/ws/'+cepCode+'/json/')
        .then(function(response){
            if (response.data.erro){
                throw new Error()
            }

            content.innerHTML = ''
            createLine(response.data.logradouro)
            createLine(response.data.bairro)
            createLine(response.data.localidade +'/'+ response.data.uf)
        })
        .catch(function(error){
            console.log(error)
            content.innerHTML = ''
            createLine('ops, algo deu errado!')
        })
}

function createLine(text){
    var line = document.createElement('p')
    var text = document.createTextNode(text)
    
    line.appendChild(text)
    content.appendChild(line)
    
}