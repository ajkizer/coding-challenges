const fiboEvenSum = require( './fiboSum');


test("returns a number", () => {
    expect(typeof fiboEvenSum(10)).toBe("number")
})

test("value should be even", () => {
    expect(fiboEvenSum(10)%2).toEqual(0)
})

test("returns the correct sum", () => {
    expect(fiboEvenSum(10)).toEqual(10);
    expect(fiboEvenSum(34)).toEqual(44);
    expect(fiboEvenSum(60)).toEqual(44);
    expect(fiboEvenSum(4000000)).toEqual(4613732);
})