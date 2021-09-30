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

    console.log(cepCode)
}