const darts = require('./darts');

test("returns correct winner", () => {
    const arr1 = [3,4,5];
    const arr2 = [4,5,6];
    expect(darts(arr1, arr2)).toBe("player 2 has won")
})

test('returns "tie"', () => {
    const arr1 = [3,4,5];
    const arr2 = [3,4,5];
    expect(darts(arr1, arr2)).toBe("tie")
})

test('returns "both players lose"', () => {
    const arr1 = [60, 60, 60];
    const arr2 = [50, 100, 100];
    expect(darts(arr1, arr2)).toBe("both players lose")
})

test('returns "tie" if both players reach 100', () => {
    const arr1 = [60,20,20];
    const arr2 = [30,30,40];
    expect(darts(arr1, arr2)).toBe("tie")
})