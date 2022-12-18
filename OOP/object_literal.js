
let emp1 = {
    name:'yahaya',
    age:24,
    depart:'software developement',
    about: function(){
        return `${this.name} is on department of ${this.depart} and his age is ${this.age}`
    },
    ageupdate:function(){
        return this.age++
    }
}
let emp2 = {
    name:'habeeb',
    age:24,
    depart:'biology chemistry',
    about: function(){
        return `${this.name} is on department of ${this.depart} and his age is ${this.age}`
    },
    ageupdate:function(){
        return this.age++
    }
}

let emplist = [emp1,emp2]
for(let i=0; i<emplist.length; i++){
    console.log(emplist[i].depart)
}
//emp1.ageupdate()
// emplist.forEach(function(x){
//     return x.name;
// })
// console.log(emplist)

//document.getElementById('header').innerHTML= 'OBJECT LITERAL';
//document.getElementById("data").innerHTML = emp2.about();
