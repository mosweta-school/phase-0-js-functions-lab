
const calculateTax = (amount) =>{
    let expectedTax= 0.1 * amount;
    let result =expectedTax;
    return result;
}


function convertToUpperCase(input1){
const myInput = input1
    let expectedOutput= myInput.toUpperCase()
    let result = expectedOutput
    return result

}

const findMaximum = (num1, num2) => {
    
    const mynum1 = Number(num1);
    const mynum2 = Number(num2);
    if (mynum1 > mynum2){
        const expectedResult = mynum1;
     const result = expectedResult
     return result
    }
        
    else if (mynum2 > mynum1){
     const expectedResult = mynum2;
     const result = expectedResult
     return result
    }
    else {
        const expectedResult = mynum1;
     const result = expectedResult
     return result
    }   
    
}

const isPalindrome = (myinput) =>{
    let input = myinput 
    let rev = ""
    for (let i = input.length - 1; i >= 0; i--) {
        rev += input[i];
    }
    if (rev == input) {
        const expectedResult = true
        const result = expectedResult
        return result
    } else {
        const expectedResult = false
        const result = expectedResult
        return result;
    }
}



const calculateDiscountedPrice = (originalP, discountedP) => {
    const originalPrice = originalP;
    const discountPercentage = discountedP;
    

    const expectedDiscountedPrice = originalPrice - originalPrice * (discountPercentage / 100 )
    const result = expectedDiscountedPrice;
    return result;

}






// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };