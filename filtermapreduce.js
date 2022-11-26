let numbers = [22,33,44,55,66,77,88,99,100, 'yahay', 'haleem', true, 'john doe', 32, 43, 54, 65, 76, 87]

//lets filter numbers only in order to make some minor calculation
// filter method helps us to filter array values so that we can apply condition and our code will execute very fast....
function sqr(n) {
    return n+1
}
let x = numbers.filter((n) => typeof(n)=== 'number'&& n%2===0
);
let y = x.map((num) => {
    return sqr(num)
})
y.forEach(function(d){
  console.log(d)     
});

let finalresult = y.reduce(function(x,y){
    return x+y
  });
console.log(`our final result is ${finalresult}`)

//numbers.forEach(function(d){
 //   console.log(d)
//});
//console.log(numbers)