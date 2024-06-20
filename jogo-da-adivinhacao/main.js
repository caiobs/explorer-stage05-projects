//variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

//functions
function handleTryClick (event) {
    //essa linha abaixo evita que envie o formulário da aplicação (não fazendo o padrão do evento)
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    //pendente melhorias na aplicação, aceitar somente números de 0 a 10 no input e etc...
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativa(s).`
        //screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativa(s).`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleResetEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}