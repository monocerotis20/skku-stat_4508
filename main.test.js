const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });
    main.stdout.on("end", () => {
        const output = output.join("").trim();
        expect(output).toBe("Insufficient parameters!");
    });
});

test("Wrong command", () => {
    const main = spawn("node", ["main.js", "count", "0"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });
});
