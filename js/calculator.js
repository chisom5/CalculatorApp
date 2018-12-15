var txtField = document.getElementById('show');

// for adding keyboard functionality
document.addEventListener('keypress', function(event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;
    calc(key);
});

function calc(key) {
    var allowedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '(', ')', '.'];
    var txt;
    if (key === 'Enter') {
        answer(txt);
        return;
    }
    if (allowedValues.includes(key)) {
        display(key);
    }
}

function display(txt) {
    txtField.value += txt;

    if (txt === 'C') {
        txtField.value = "";
        return false;
    }
}

function backspace() {
    var num = txtField.value;
    var len = num.length - 1;
    var newNumber = num.substring(0, len);
    txtField.value = newNumber;
}

function signChange() {
    var plus = txtField.value;
    var nem = plus * -1;
    txtField.value = nem;
}

//executed when equals to btn is clicked
function answer(txt) {
    txt = txtField.value;
    // if there is no input, this is to prevent undefined
    // from showing in the text field
    if (txt != "") {
        try {
            txt = eval(txt);
            txtField.value = txt;
        } catch (error) {
            txtField.value = "Syntax error";
        }
    }
}

function cos(txt) {
    txt = txtField.value;
    txt = Math.cos(txt * Math.PI / 180);
    txtField.value = txt;

}

function sin(txt) {
    txt = txtField.value;
    txt = Math.sin(txt * Math.PI / 180);
    txtField.value = txt;
}

function tan(txt) {
    txt = txtField.value;
    txt = Math.tan(txt * Math.PI / 180);
    txtField.value = txt;
}

function log(txt) {
    txt = txtField.value;
    if (txt != "") {
        txt = Math.log10(txt);
        txtField.value = txt;
    }
}

function exponent(txt) {
    txt = txtField.value;
    txt = Math.exp(txt);
    txtField.value = txt;
}
var val = 0.0;

function percent(txt) {
    val = txtField.value;
    txtField.value = val * 0.01;
}

const pie = 3.142;

function pier(txt) {
    txt = txtField.value;
    txtField.value = txt * pie;

}

function square(txt) {
    txt = txtField.value;
    txt = Math.sqrt(txt);
    txtField.value = txt;
}

// there is no need for a raiseTo function this since we are using ** to represent it.

// function raiseTo(base, power) {
//     base = txtField.value;
//     console.log(base);
// }

function factorial(txt) {
    txt = txtField.value;
    var result = 1;
    for (var i = 0; i < txt; i++) {
        result = result * (txt - i);
    }

    txtField.value = result;

}