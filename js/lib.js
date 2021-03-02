
var lib = ( function() {

    document.addEventListener('DOMContentLoaded', init)
    
    function init() {
        addEventListener()

    }

    function addEventListener() {
        var numberBtns = document.getElementsByClassName('number')
        var operatorBtns = document.getElementsByClassName('operator')

        var clearBtn = document.getElementById('clear')

        
        for (var i=0; i<numberBtns.length; i++) {
            numberBtns[i].addEventListener('click', handleNumberBtn)
        }

        for (var i=0; i<operatorBtns.length; i++) {
            operatorBtns[i].addEventListener('click', handleOperator)
        }
    }

    /**
     * Disply the number that is pressed to the terminal
     */
    function handleNumberBtn() {
        var terminal = getTerminal()
        terminal.value = terminal.value + this.innerHTML
    }

    function handleOperator() {

        // Get the value from the terminal and store it 

    }

    function clearTerminal() {
        var terminal = getTerminal()
        terminal.value = ""

    }

    function getTerminal() {
        return document.getElementById('terminal')
    }

    return {
        
    }
}())
