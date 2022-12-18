function Employee(name,depart,age){
    this.name=name;
    this.age=age;
    this.depart=depart;
    this.ageupdate=function(){
        return this.age++
    }
}

let emp1 = new Employee('yahaya','software development',23)
let emp2 = new Employee('muhammad','civil engineering',37)
let emp3 = new Employee('ibrahim','bio chemist',19)
Employee.prototype.about = function(){
    return `${this.name} is on department of ${this.depart} and his age is ${this.age}`
};
let emplist = [emp1,emp2,emp3]
for(let i=0; i<emplist.length; i++){
     //document.getElementById('datalist').innerHTML = emplist[i].name +"<br>"
     console.log(emplist[i].name +"--"+ emplist[i].depart)
     }
//emp1.ageupdate()
// emplist.forEach(function(x){
//     return x.name;
// })
console.log(emp1)

//document.getElementById('header').innerHTML= 'OBJECT CONSTRUCTOR FUNCTION';
//document.getElementById("data").innerHTML = emp2.about();
