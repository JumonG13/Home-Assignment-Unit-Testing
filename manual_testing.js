function calTwoNumbers(a,b){
    return (a / ((b * b) / 10000)).toFixed(2);
}

function testCalculate(){
    const result = calTwoNumbers(80,177);
    const expected = 25.54;
    
    console.assert(
        result == expected,
        `The result ${result} doesn't match the expected value ${expected}` 
    )
}

testCalculate()