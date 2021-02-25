const arraySum= require("./arraySum");


test("returns sum of all numbers in array", () => {
    const arr = [1,2,3,4,5];
    expect(arraySum(arr)).toEqual(15);
});

test("Empty Array returns 0", () => {
    const arr = [];
    expect(arraySum(arr)).toEqual(0)
})

test("Array with strings returns null", () => {
    const arr = [0, "hello"];
    expect(arraySum(arr)).toBe("Array must only contain numbers")
})