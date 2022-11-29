let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant', 65, 95,75,06,74, undefined, null, false, true
];
let filani = animals.filter((data) => { return typeof(data) == 'string'})
let testani = animals.every((e) => {
    typeof(e) == 'boolean'
})
filani.sort((a,b) => {
    if (a>b)
    return -1;
    if(a<b)
    return 1;
    return 0;
})
console.log(filani)