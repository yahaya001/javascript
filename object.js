let Student = {
    name:'yahaya',
    age:34,
    depart:'information technology',
    tech:'python, django and javascript',
    eligibility:function(){
        return this.age
    },
    compare:function(other){
        if (other.age>this.age){
            console.log(`${other.name} age is ${other.age}\n he is older than ${this.name} age is ${this.age}`)
        }
        else{
         console.log(`${this.name} becouse his age is ${this.age}\n he is older than ${other.name} age is ${other.age}`)   
        }
        

    }

}

let Student2 = {
    name:'usman',
    age:35,
    depart:'computer science',
    tech:'hacking',
    eligibility:function(){
        return this.age
    },
    compare:function(other){
        if (other.age>this.age){
            console.log(`${other.name} age is ${other.age}\n he is older than ${this.name} age is ${this.age}`)
        }
        else{
         console.log(`${this.name} becouse his age is ${this.age}\n he is older than ${other.name} age is ${other.age}`)   
        }
    }

}

let Student3 = {
    name:'muhammad',
    age:44,
    depart:'islamic and arabic',
    tech:'da,awah methodology',
    eligibility:function(){
        return this.age
    },
    compare:function(other){
        if (other.age>this.age){
            console.log(`${other.name} age is ${other.age}\n he is older than ${this.name} age is ${this.age}`)
        }
        else{
         console.log(`${this.name} becouse his age is ${this.age}\n he is older than ${other.name} age is ${other.age}`)   
        }
    }

}


console.log()

data = Student.eligibility()
console.log(data)

let agecomp = function(Student, Student2){
   if (Student2.age>Student.age){
  console.log(`${Student2.name} is older he has ${Student2.age} age`)
}
 else{
  console.log(`${Student.name}  he is younger he has ${Student.age} age`)
 } 
}

// agecomp(Student,Student3)
Student.compare(Student3)

// this keyword simple means the current object

for (key in Student){
    console.log(key,'=', Student[key])
}
