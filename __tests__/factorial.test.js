const factorial = require("../factorial");

test("tests factorial_iteration(4)", () => {
    expect(factorial.factorial_iteration(4)).toBe(24);
})