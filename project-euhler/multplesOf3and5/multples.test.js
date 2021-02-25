const multiplesOf3and5 = require('./multiples');

test("should return a number", () => {
    const ans = multiplesOf3and5(10);
    expect(typeof ans).toBe("number")
})

test("should return correct value", () => {
    expect(multiplesOf3and5(49)).toEqual(543);
    expect(multiplesOf3and5(1000)).toEqual(233168);
})

test("should return 0", () => {
    expect(multiplesOf3and5(0)).toEqual(0)
})