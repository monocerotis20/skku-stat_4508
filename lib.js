function sum(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) s += numbers[i];
    return s;
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

module.exports = {
    sum,
    avg,
    max,
};
