
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


let emp1 = new Employee('yahaya','software development',23)
let emp2 = new Employee('muhammad','civil engineering',37)
let emp3 = new Employee('ibrahim','bio chemist',19)

let employees = [emp1,emp2,emp3]
employees.forEach(function(e){
    console.log(e.name)
})
//console.log()
//console.log(emparray)



// document.getElementById('header').innerHTML= 'CLASSES';
// document.getElementById("data").innerHTML = emp2;
