let username = 'yahaya24'
let age = 24
let ismarried = false

username = Boolean(username)
age = String(age)
ismarried = Number(ismarried)

console.log(`type of ${username} is ` + typeof(username))
console.log(`type of ${age} is ` + typeof(age))
console.log(`type of ${ismarried} is ` + typeof(ismarried))

console.log(`our guest is ${username}, and his age is ${age}`)
