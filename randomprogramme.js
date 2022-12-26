
function sqr (data){
    return data*5
}

let nums = [849,948,282,554,432,242,4416,3555,3523,53,53,5335,223,5335]

let num = []
num[1] = 5
num[20] = 'hello world'
num[30] = true
num[51] = 100

/**for(let sp = 0; sp<nums.length; sp++){
    console.log(sqr(nums[sp]), sp)
}*/
//let top5 = nums.slice(0,5);
//let last5 = nums.slice(5)

/**for(data in nums){
    console.log(data)
}*/
// for(data of num){
//     if(typeof(data) =='number' || typeof(data) =='string' || typeof(data) =='boolean')
//     console.log(data)
// }
let a = 'b'
let b = 'f'
/**
if (a>b){
    console.log('A come first')
}
if (a<b){
    console.log('B come first')
}
else {
    console.log('nothing has change')
}*/
let list = ['john', 'doe', 'habeeb',536, 839, 648, 8437, 'ismaeel', 'muhammad',];
function ff(data='default argument data') {
console.log(data)
}
list.filter(function(e){
    return typeof(e) == 'number'
})
//console.log(list)


function query(appix) {
    return appix + this.name
}

let p1 = {
    name:'john doe'
}

let p2 = {
    name:'juliana'
}
let getThis = ()=>this
console.log(getThis)
//call and apply are almost similar except apply accept a list of array in--
//its second argument instead of simple var or string
//console.log(query.call(p2, ' hello '))
console.log(query.apply(p1, [' hello ']))