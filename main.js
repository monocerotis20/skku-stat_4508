#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

function makeNumbers(argv) {
    let numbers = [];
    for (let i = 3; i < argv.length; i++) {
        if (argv[i][1] === "@") {
            if (!lib.isInt(argv[i].slice(2)) || argv[i].slice(2) < 1) {
                console.log("Invalid repeat!");
                process.exit(1);
            }

            for (let j = 0; j < argv[i].slice(2); j++) numbers.push(argv[i][0]);
        } else numbers.push(argv[i]);
    }
    return numbers.map((n) => parseFloat(n));
}
let numbers = makeNumbers(process.argv);

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "min":
        result = lib.min(numbers);
        break;
    case "med":
        result = lib.med(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);
