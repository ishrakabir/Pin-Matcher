
function randGen() {

    const randNum = (Math.round((Math.random() * 10000) + 1)) + '';
    // console.log(rand);
    if (randNum.length === 4) {
        document.getElementById('input_element').value = randNum;
        return randNum;
    }
    else
        return randGen();
}
document.getElementById('generateBtn').addEventListener('click', function () {
    const rand = randGen();
});


document.getElementById('calc-id').addEventListener('click', function (event) {


    const number = event.target.innerText;
    const inputVal = document.getElementById('typed-num');
    const previousNumber = inputVal.value;
    if (isNaN(number)) {
        if (number === 'C')
            inputVal.value = '';
        else if (number === '<') {
            const a = previousNumber.split('');
            a.pop();
            const remains = a.join('');
            inputVal.value = remains;
        }
    }
    else {
        const newNumber = previousNumber + number;
        inputVal.value = newNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    const randInput = document.getElementById('input_element');
    const randInputVal = randInput.value;


    const submitInput = document.getElementById('typed-num');
    const submitInputVal = submitInput.value;

    const checkfail = document.getElementById('failure');
    const checksuccess = document.getElementById('success')
    if (submitInputVal == randInputVal) {
        checksuccess.style.display = 'block';
        checkfail.style.display = 'none';
    }
    else {
        checkfail.style.display = 'block';
        checksuccess.style.display = 'none';
    }
});
