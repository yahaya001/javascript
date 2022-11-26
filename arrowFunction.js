function add(num1, num2){
    if (num1 < 0 || num2 < 0){
        return "addision error"
    }
    else{
    return num1+num2    
    }
       
}

let add2 = function (num1, num2){
    return num1+num2
}

let addWithArrow = (num1, num2) => num1+num2


function mul(num1, num2){
    return num1*num2
}

function sub(num1, num2){
    return num1-num2
}

function div(num1, num2){
    return num1/num2
}

function power(num){
    return num*num
}

function remainder(num){
    if (num%2===0)
       return `${num} is even number`
    else
        return `${num} is odd number`
}

// addition = div(5,50)
// console.log(addition)

addition = addWithArrow(5,50)
console.log(addition)

result = remainder(631267623150)
console.log(result)