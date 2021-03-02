
var lib = (function () {

    document.addEventListener('DOMContentLoaded', init)

    var operator = ""
    var inputs = []
    var shouldClearTerminal = false

    function init() {
        addEventListener()

    }

    function addEventListener() {
        var numberBtns = document.getElementsByClassName('number')
        var operatorBtns = document.getElementsByClassName('operator')

        var clearBtn = document.getElementById('clear')

        clearBtn.addEventListener('click', clearTerminal)
        for (var i = 0; i < numberBtns.length; i++) {
            numberBtns[i].addEventListener('click', handleNumberBtn)
        }

        for (var i = 0; i < operatorBtns.length; i++) {
            operatorBtns[i].addEventListener('click', handleOperator)
        }
    }

    /**
     * Disply the number that is pressed to the terminal
     */
    function handleNumberBtn() {

        // clear the terminal if asked
        if (shouldClearTerminal) {
            clearTerminal()
            shouldClearTerminal = false
        }

        var terminal = getTerminal()
        terminal.value = terminal.value + this.innerHTML
    }

    function handleOperator() {


        // Get the value from the terminal and store it 
        if (!shouldClearTerminal)
            inputs.push(getTerminalValue())

        // Check how many items in the input if two then perform the calculation
        if (inputs.length == 2) {
            inputs[0] = calculate()
            inputs.pop()
        }

        operator = this.innerHTML
        shouldClearTerminal = true

        console.log(inputs)
        console.log(operator)

    }

    function calculate() {
        var result = 0
        switch (operator.toLowerCase()) {
            case '%':
                result = calc.modulus(inputs[0],inputs[1])
                break
            case '/':
                result = calc.divide(inputs[0],inputs[1])
                break
            case 'x':
                result = calc.multiply(inputs[0],inputs[1])
                break
            case '-':
                result = calc.subtract(inputs[0],inputs[1])
                break
            default:
                result = calc.add(inputs[0],inputs[1])
                break
        }
        return result
    }

    function clearTerminal() {
        var terminal = getTerminal()
        terminal.value = ""

    }

    function getTerminalValue() {
        return parseFloat(getTerminal().value)
    }

    function getTerminal() {
        return document.getElementById('terminal')
    }

    return {

    }
}())
