function isOdd(number) {
    return number % 2 !=0;  
}
function isEven(number) {
    return number % 2 ===0;  
}
function numbercheck(nums, func) {
    let newnumbers = []
    for (const num of nums) {
        if (func(num)) {
           newnumbers.push(num)     
        }
            
    }
    return newnumbers
}
let numbers = [452,331,441,14,412,14,14,11,114]
let result = numbercheck(numbers, isEven)

let isitodd = isOdd(11)
console.log(result)