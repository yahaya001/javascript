

class Employee{
    constructor(name,depart,age){
        this.name=name;
        this.age=age;
        this.depart=depart;
    }
    summary = function(){
        return `${this.name} comes from ${this.depart} department`
    }

}
class Admin extends Employee{
    constructor(name, depart, age, roll){
        super(name, depart, age)
        this.roll = roll
    }
    test (ua) {
        let data = employees.filter((e)=>{return e.age>ua})

        return data
    }
}

let emp1 = new Employee('yahaya','software development',23)
let emp2 = new Employee('muhammad','civil engineering',37)
let emp3 = new Employee('ibrahim','bio chemist',19)
let emp4 = new Admin('john doe', 'mobile app', 42, 'chief manager')
let emp5 = new Employee('ismaeel','junior developer',17)
let employees = [emp1,emp2,emp3,emp4,emp5]

// let filtered = employees.filter(
//     function(e){
//         return e.age > 20
//     }
// 
console.log(emp4.test(18))
// document.getElementById('header').innerHTML= 'CLASSES';
// document.getElementById("data").innerHTML = emp2;