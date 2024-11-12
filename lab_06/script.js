function addToDisplay(value) {
    var display = document.getElementById("display");
    display.value = display.value + value;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

function calculate() {
    var display = document.getElementById("display");
    display.value = eval(display.value);
}