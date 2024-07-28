const fibonacci = function(n) {

    n = Number (n)

    if (n < 0)
        return 'OOPS'
    if (n == 0)
        return 0

    
    let firstNum = 0, secondNum = 1
    let newNum
    for (let i = 2; i <= n; i++) {
        newNum = firstNum + secondNum
        firstNum = secondNum
        secondNum = newNum
    }
    return secondNum
};


// Do not edit below this line
module.exports = fibonacci;
