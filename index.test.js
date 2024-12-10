const { sum } = require("./index.js");
const { abs } = require("./index.js");
test("adds 1 + 2 to equal 3", ()=> {
    expect(sum(1,2)).toBe(3);
});

test("adds 100 - 50 to equal 150", ()=>{
    expect(abs(100,-50)).toBe(150);
});

test("adds -100 + 50 to equal 150", ()=>{
    expect(abs(100,-50)).toBe(150);
});