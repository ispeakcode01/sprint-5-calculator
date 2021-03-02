document.addEventListener('DOMContentLoaded', init)


function init() {
    addEventListener()


}

function addEventListener() {
    var numberBtns = document.getElementsByClassName('number')
    var clearBtn = document.getElementById('clear')

    clearBtn.addEventListener('click', clearTerminal)
    for (var i=0; i<numberBtns.length; i++) {
        numberBtns[i].addEventListener('click', handleNumberBtn)
    }
}

/**
 * Disply the number that is pressed to the terminal
 */
function handleNumberBtn() {
    var terminal = getTerminal()
    terminal.value = terminal.value + this.innerHTML
}

function clearTerminal() {
    var terminal = getTerminal()
    terminal.value = ""

}

function getTerminal() {
    return document.getElementById('terminal')
}