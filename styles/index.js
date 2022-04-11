document.querySelector('button').onclick = function () {
    let l = document.querySelector('#length').value;
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    let result = [];
    for (let i = 0; i < l; i++) {
        result.push(randomInteger(min, max));
    }
    document.querySelector('#out-input').value = result;

    // минимальное число массива
    let outmin = Math.min(...result);
    document.querySelector('#out-input-min').value = outmin;

    // максимальное число массива
    let outmax = Math.max(...result);
    document.querySelector('#out-input-max').value = outmax;

    // среднее арифметическое
    function averageСost(result) {
        return result.reduce((partial_sum, a) => partial_sum + a, 0) / result.length;
    }
    document.querySelector('#out-input-average').value = averageСost(result);

    // сумма массива
    let sum = result.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
    document.querySelector('#out-input-sum').value = sum;

    // произведение
    document.querySelector('#out-input-work').value = result.reduce((a, b) => a * b);

    return result;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}