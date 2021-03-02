document.addEventListener('DOMContentLoaded', init)


function init() {
    addEventListener()


}

function addEventListener() {
    var numberBtns = document.getElementsByClassName('number')
    for (var i=0; i<numberBtns.length; i++) {
        numberBtns[i].addEventListener('click', handleNumberBtn)
    }
}

function handleNumberBtn() {
    var terminal = document.getElementById('terminal')
    terminal.value = terminal.value + this.innerHTML
}