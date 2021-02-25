const subtract = require("./subtract");

test("properly returns difference between 2 numbers", () => {
    const rtnVal = subtract(3,2);
    expect(rtnVal).toBe(1)
})