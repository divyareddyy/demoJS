const multiply = require('./multiply')

test('properly multiplying  two numbers',() => {
    expect
    (
        multiply(1,2)
    ).toBe(2)
})