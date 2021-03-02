
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
        var resetBtn = document.getElementById('reset')
        var minusPlusBtn = document.getElementById('minusplus')

        minusPlusBtn.addEventListener('click', flipTheNumberSign)
        var equalBtn = document.getElementById('equal')
        clearBtn.addEventListener('click', clearTerminal)
        resetBtn.addEventListener('click', resetCalculator)
        equalBtn.addEventListener('click', showAnswer)

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

        setTerminalValue(getTerminal().value + this.innerHTML)
    }

    function showAnswer() {

        /**
         * If there are no value in the input array but has a value in the terminal
         * then do nothing to it, keep the same number in the terminal
         */
        if (inputs.length == 0 && getTerminalValue())
            return

        /**
         * If there are no value in the input array then just output nothing
         * to the terminal
         */
        if (inputs.length == 0) {
            setTerminalValue("")
            return
        }


        /**
         * Here we know that index 0 in the inputs has a value
         */
        var value = getTerminalValue()
        if (value != -1 && operator != "") {
            inputs[1] = value
            setTerminalValue(calculate())
        } else {
            setTerminalValue(inputs[0])
        }

        operator = ""
        shouldClearTerminal = true


    }

    function resetCalculator() {
        setTerminalValue("")
        shouldClearTerminal = false
        operator = ""
        inputs = []
    }

    function flipTheNumberSign() {
        var value = getTerminalValue()
        if (value == -1) {
            setTerminalValue("-") 
        } else {
            setTerminalValue(value * -1)
        }
    }

    function handleOperator() {

        // Get the value from the terminal and store it 
        if (!shouldClearTerminal)
            inputs.push(getTerminalValue())

        // Check how many items in the input if two then perform the calculation
        if (inputs.length == 2)
            calculate()

        operator = this.innerHTML
        shouldClearTerminal = true

    }

    function calculate() {
        var result = 0
        switch (operator.toLowerCase()) {
            case '%':
                result = calc.modulus(inputs[0], inputs[1])
                break
            case '/':
                result = calc.divide(inputs[0], inputs[1])
                break
            case 'x':
                result = calc.multiply(inputs[0], inputs[1])
                break
            case '-':
                result = calc.subtract(inputs[0], inputs[1])
                break
            default:
                result = calc.add(inputs[0], inputs[1])
                break
        }
        inputs[0] = result
        if (inputs.length == 2)
            inputs.pop()

        return result
    }

    function setTerminalValue(newValue) {
        getTerminal().value = newValue
    }

    function clearTerminal() {
        setTerminalValue("")
    }

    function getTerminalValue() {
        var value = parseFloat(getTerminal().value)

        return value ? value : -1
    }

    function getTerminal() {
        return document.getElementById('terminal')
    }

    return {

    }
}())
