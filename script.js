
const inputsIndexacao = document.getElementsByName('indexacao')
inputsIndexacao[1].checked = true

const inputsRendimento = document.getElementsByName('rendimento')
inputsRendimento[0].checked = true

const resultContainer = document.querySelector('.section-2')

let indexacaoChecked = document.querySelector
    ('input[name="indexacao"]:checked')

let rendimentoChecked = document.querySelector
    ('input[name="rendimento"]:checked')

//aplica a classe no parent de um elemento ou de um array de elementos
function applyClassOnParent(element, className) {
    if (Array.isArray(element) === true) {
        element.forEach(e => {
            e.parentNode.classList.add(`${className}`)
        })
    } else {
        element.parentNode.classList.add(`${className}`)
    }
}

//remove a classe do parent de cada elemento do array
function removeClassFromParent(element, className) {
    element.forEach(e => {
        e.parentNode.classList.remove(`${className}`)
    })
}

//aplica a classe no nó irmão
function applyClassNext(e, className) {
    e.nextElementSibling.classList.add(`${className}`)
}

//remove a classe do nó irmão
function removeClassNext(array, className) {
    array.forEach(e => {
        e.nextElementSibling.classList.remove(`${className}`)
    })
}

//aplicando a classe que insere o icone "checked" na label input radio selecionado
applyClassNext(indexacaoChecked, 'la-check')
applyClassNext(rendimentoChecked, 'la-check')

//aplicando a classe com o estilo do input radio selecionado
applyClassOnParent(indexacaoChecked, 'checked')
applyClassOnParent(rendimentoChecked, 'checked')

inputsIndexacao.forEach(e => {
    e.addEventListener('click', () => {
        removeClassFromParent(inputsIndexacao, 'checked')
        removeClassNext(inputsIndexacao, 'la-check')

        indexacaoChecked = document.querySelector
            ('input[name="indexacao"]:checked')

        applyClassNext(indexacaoChecked, 'la-check')
        applyClassOnParent(indexacaoChecked, 'checked')
    })
})

inputsRendimento.forEach(e => {
    e.addEventListener('click', () => {
        removeClassFromParent(inputsRendimento, 'checked')
        removeClassNext(inputsRendimento, 'la-check')

        rendimentoChecked = document.querySelector
            ('input[name="rendimento"]:checked')

        applyClassNext(rendimentoChecked, 'la-check')
        applyClassOnParent(rendimentoChecked, 'checked')
    })
})






const inputs = Array.from(document.querySelectorAll('input[type="text"]'))
const submit = document.querySelector('input[type="submit"]')
const clearBtn = document.getElementById('limpar')

const indicadoresUrl = 'http://localhost:3000/indicadores'

//elemento do card que receberá o valor recebido da API
const cardsData = {
    valorFinalBruto: document.getElementById('valorFinalBruto'),
    aliquotaIR: document.getElementById('aliquotaIR'),
    valorPagoIR: document.getElementById('valorPagoIR'),
    valorFinalLiquido: document.getElementById('valorFinalLiquido'),
    valorTotalInvestido: document.getElementById('valorTotalInvestido'),
    ganhoLiquido: document.getElementById('ganhoLiquido')
}

//traz os indicadores da API, que serão pré-carregados, e insere nos elementos correspondentes
function getIndicadores() {
    axios.get(indicadoresUrl)
        .then(response => {

            const ipcaValue = response.data[1].valor
            IPCA.value = JSON.stringify(ipcaValue)

            const cdiValue = response.data[0].valor
            CDI.value = JSON.stringify(cdiValue)

        })
        .catch(error => console.log(error))
}

function formatToBRL(value) {
    let formated = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return formated
}

//faz a busca na API, filtrando pelos parametros fornecidos no formulario, e insere nos elementos correspondentes
function getSimulacoes(indexacao, tipoRendimento) {

    const url = `http://localhost:3000/simulacoes/?tipoIndexacao=${indexacao}&tipoRendimento=${tipoRendimento}`

    axios.get(url)
        .then(response => {

            cardsData.valorFinalBruto.innerHTML = formatToBRL(response.data[0].valorFinalBruto)
            cardsData.aliquotaIR.innerHTML = response.data[0].aliquotaIR + '%'
            cardsData.valorPagoIR.innerHTML = formatToBRL(response.data[0].valorPagoIR)
            cardsData.valorFinalLiquido.innerHTML = formatToBRL(response.data[0].valorFinalLiquido)
            cardsData.valorTotalInvestido.innerHTML = formatToBRL(response.data[0].valorTotalInvestido)
            cardsData.ganhoLiquido.innerHTML = formatToBRL(response.data[0].ganhoLiquido)

        })

        .catch(error => console.log(error))
}

//retorna os inputs vazios e NaN
function invalidInputs(inputs) {
    let invalids = []
    inputs.forEach(e => {
        if ((e.value === '') || isNaN(e.value)) {
            invalids.push(e)
        }
    })
    return invalids
}

//valida se todos os inputs do formulario estao OK, retornando true ou false
function allFormIsOk() {
    if (invalidInputs(inputs).length > 0) {
        return false
    } else {
        return true
    }
}

function setDisplayVisible(element) {
    element.style.display = 'block'
}

function cleanInputs(inputs) {
    inputs.forEach(e => {
        e.value = ''
    })
}

getIndicadores()

submit.addEventListener('click', e => {
    e.preventDefault()

    if (allFormIsOk() === false) {
        applyClassOnParent(invalidInputs(inputs), 'error')

    } else {
        removeClassFromParent(inputs, 'error')
        getSimulacoes(indexacaoChecked.id, rendimentoChecked.id)
        setDisplayVisible(resultContainer)
    }
})

clearBtn.addEventListener('click', e => {
    cleanInputs(inputs)
})

