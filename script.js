let lastOperand = 0;
let operation = null;
let countOperation = [];

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = 0;

function addHistory(){
    const history = document.getElementById("history");
    history.textContent = "";
    for (let i = 0; i < countOperation.length; i++) {
        history.textContent += countOperation[i] + "\n";
    }
}

document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '';
    inputWindow.value += '0';
})




document.getElementById('btn_sum').addEventListener('click', function () {
    if (inputWindow.value !== '0') {
        lastOperand = parseInt(inputWindow.value);
        operation = 'sum';
        inputWindow.value += '+';
    } else
        inputWindow.value = '0';
})

document.getElementById('btn_def').addEventListener('click', function () {
    if ((inputWindow.value !== '0')&&(inputWindow.value !== '-')) {
        lastOperand = parseInt(inputWindow.value);
        operation = 'def';
        inputWindow.value += '-';
    } else
        inputWindow.value = '-';
})

document.getElementById('btn_mul').addEventListener('click', function () {
    if (inputWindow.value !== '0') {
        lastOperand = parseInt(inputWindow.value);
        operation = 'mul';
        inputWindow.value += '*';
    } else
        inputWindow.value = '0';
})

document.getElementById('btn_dev').addEventListener('click', function () {
    if (inputWindow.value !== '0') {
        lastOperand = parseInt(inputWindow.value);
        operation = 'dev';
        inputWindow.value += '/';
    } else
        inputWindow.value = '0';
})

document.getElementById('btn_sq').addEventListener('click', function () {
    if (inputWindow.value === '0') inputWindow.value = '0';
    lastOperand = parseInt(inputWindow.value);
    operation = 'sq';
    inputWindow.value = '';
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const secondNumber = inputWindow.value.split("+");
        const rezult = lastOperand + parseInt(secondNumber[1]);
        countOperation.push(lastOperand + ' + ' + secondNumber[1] + ' = ' + rezult);
        operation = null;
        lastOperand = 0;
        inputWindow.value = rezult;
    }

    if (operation === 'def') {
        const secondNumber = inputWindow.value.split("-");
        const rezult = lastOperand - parseInt(secondNumber[1]);
        countOperation.push(lastOperand + ' - ' + secondNumber[1] + ' = ' + rezult);
        operation = null;
        lastOperand = 0;
        inputWindow.value = rezult;
    }

    if (operation === 'mul') {
        const secondNumber = inputWindow.value.split("*");
        const rezult = lastOperand * parseInt(secondNumber[1]);
        countOperation.push(lastOperand + ' * ' + secondNumber[1] + ' = ' + rezult);
        operation = null;
        lastOperand = 0;
        inputWindow.value = rezult;
    }

    if (operation === 'dev') {

        if (parseInt(inputWindow.value) !== 0) {
            const secondNumber = inputWindow.value.split("/");
            const rezult = lastOperand / parseInt(secondNumber[1]);
            countOperation.push(lastOperand + ' / ' + secondNumber[1] + ' = ' + rezult);
            operation = null;
            lastOperand = 0;
            inputWindow.value = rezult;
        } else {
            operation = null;
            lastOperand = 0;
            inputWindow.value = 'ERROR';
        }
    }
    addHistory();

})

document.getElementById('btn_sq').addEventListener('click', function () {
    const rezult = Math.sqrt(parseInt(lastOperand));
    countOperation.push('Sqrt(' + lastOperand + ') = ' + rezult);
    operation = null;
    lastOperand = 0;
    inputWindow.value = rezult;
    addHistory();
})


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})
