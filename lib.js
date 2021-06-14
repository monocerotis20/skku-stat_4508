function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function min(numbers) {
    return numbers.reduce((max, curr) => (max < curr ? max : curr), numbers[0]);
}

function med(numbers) {
    let tmp,
        l = numbers.length;

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                tmp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = tmp;
            }
        }
    }

    if (l % 2 === 0) return (numbers[l / 2 - 1] + numbers[l / 2]) / 2;
    else return numbers[(l - 1) / 2];
}

function isInt(num) {
    return num % 1 === 0;
}

module.exports = {
    sum,
    avg,
    max,
    min,
    med,
    isInt,
};
