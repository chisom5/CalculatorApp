var txtField = document.getElementById('show');

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

function answer(txt) {
    txt = txtField.value;
    txt = eval(txt);
    txtField.value = txt;
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
    txt = Math.log10(txt);
    txtField.value = txt;
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

pie = 3.142;

function pier(txt) {
    txt = txtField.value;
    txtField.value = txt * pie;

}

function square(txt) {
    txt = txtField.value;
    txt = Math.sqrt(txt);
    txtField.value = txt;
}

function raiseTo(base, power) {
    base = txtField.value;
    console.log(base);

}

function factorial(txt) {
    txt = txtField.value;
    var result = 1;
    for (var i = 0; i < txt; i++) {
        result = result * (txt - i);
    }

    txtField.value = result;

}