const isPalindrome = () =>{
    let input = "radar"
    let rev = "";
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

console.log(isPalindrome())

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

console.log(findMaximum(10,20))

const calculateDiscountedPrice = () => {
    const originalPrice = 100;
    const discountPercentage = 20;

    const expectedDiscountedPrice = originalPrice - originalPrice * discountPercentage * 0.01
    const result = expectedDiscountedPrice;
    return result;

}
console.log(calculateDiscountedPrice())