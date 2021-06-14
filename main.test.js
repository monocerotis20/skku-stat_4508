const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Wrong command", () => {
    const main = spawn("node", ["main.js", "count", "0"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});

test("Valid repeat 1", () => {
    const main = spawn("node", ["main.js", "med", "1@2", "3", "4"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("2");
    });
});

test("Valid repeat 2", () => {
    const main = spawn("node", ["main.js", "min", "1.5@3", "3"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("1.5");
    });
});

test("Invalid repeat 1", () => {
    const main = spawn("node", ["main.js", "sum", "1@0", "3"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});

test("Invalid repeat 2", () => {
    const main = spawn("node", ["main.js", "sum", "1@2.4", "3"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});
