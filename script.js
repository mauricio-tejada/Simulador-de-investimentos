//arrays com os radios inputs
const inputsIndexacao = document.getElementsByName('indexacao')
inputsIndexacao[1].checked = true

const inputsRendimento = document.getElementsByName('rendimento')
inputsRendimento[0].checked = true

//selecionando o radio selecionado
let indexacaoChecked = document.querySelector
    ('input[name="indexacao"]:checked')

let rendimentoChecked = document.querySelector
    ('input[name="rendimento"]:checked')


//função que aplica a classe no parent
function applyClass(e, className) {
    if (Array.isArray(e) === true) {
        e.forEach(e => {
            e.parentNode.classList.add(`${className}`)
        })
    } else {
        e.parentNode.classList.add(`${className}`)
    }
}


//função que remove a classe do parent
function removeClass(array, className) {
    array.forEach(e => {
        e.parentNode.classList.remove(`${className}`)
    })
}


//função que aplica a classe no nó irmão
function applyClassNext(e, className) {
    e.nextElementSibling.classList.add(`${className}`)
}

//class='las' 'la-check'

//função que remove a classe do nó irmão
function removeClassNext(array, className) {
    array.forEach(e => {
        e.nextElementSibling.classList.remove(`${className}`)
    })
}

applyClassNext(indexacaoChecked, 'la-check')
applyClassNext(rendimentoChecked, 'la-check')
applyClass(indexacaoChecked, 'checked')
applyClass(rendimentoChecked, 'checked')

inputsIndexacao.forEach(e => {
    e.addEventListener('click', () => {
        removeClass(inputsIndexacao, 'checked')
        removeClassNext(inputsIndexacao, 'la-check')

        indexacaoChecked = document.querySelector
            ('input[name="indexacao"]:checked')

        applyClassNext(indexacaoChecked, 'la-check')
        applyClass(indexacaoChecked, 'checked')
    })
})

inputsRendimento.forEach(e => {
    e.addEventListener('click', () => {
        removeClass(inputsRendimento, 'checked')
        removeClassNext(inputsRendimento, 'la-check')

        rendimentoChecked = document.querySelector
            ('input[name="rendimento"]:checked')

        applyClassNext(rendimentoChecked, 'la-check')
        applyClass(rendimentoChecked, 'checked')
    })
})

const inputs = Array.from(document.querySelectorAll('input[type="text"]'))

const submit = document.querySelector('input[type="submit"]')

//função que valida um array de text inputs e retorna os vazios e NaN
function inputValidate(array) {
    let invalidInputs = []
    array.forEach(e => {
        if ((e.value === '') || isNaN(e.value)) {
            invalidInputs.push(e)
        }
    })
    return invalidInputs
}

submit.addEventListener('click', e => {
    e.preventDefault()
    applyClass(inputValidate(inputs), 'error')
})

