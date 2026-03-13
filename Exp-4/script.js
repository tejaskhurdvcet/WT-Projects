const display = document.getElementById("display");
const historyBox = document.getElementById("history");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    historyBox.innerText = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        historyBox.innerText = expression + " =";
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function scientific(type) {
    try {
        let value = parseFloat(display.value);
        let result;

        switch (type) {
            case "sqrt":
                result = Math.sqrt(value);
                break;
            case "square":
                result = value * value;
                break;
            case "sin":
                result = Math.sin(value * Math.PI / 180);
                break;
            case "cos":
                result = Math.cos(value * Math.PI / 180);
                break;
            case "tan":
                result = Math.tan(value * Math.PI / 180);
                break;
            default:
                result = value;
        }

        historyBox.innerText = type + "(" + value + ")";
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", function (e) {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        append(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        backspace();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});