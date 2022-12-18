let num = 0;
function recursive(){
    console.log("hello aliens", num)
    num++;
    //recursive()
}
//recursive();

//TRY SOLVE FACTORIAL USING LOOP

//let fact = 5; 
let answer = 0;
for(let i = 4; i>0;){
    console.log(i)
    answer = i * 5
    i--;
}
console.log('our final answer is ',answer)
console.log("-----------------")
console.log("-----------------")

let sum = 0;
for(let i=0; i<=10; i++){
    sum +=i
}
console.log(sum)
// function fact(factnum){
//     fact()
// }
// fact(6)
//console.log(fact(5))