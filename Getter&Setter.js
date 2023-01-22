class Person {
    constructor(name){
        this.name = name;
    }
    get name(){
        return this.name;
    }
    set name(newName){
        newName = newName.trim();
        if (newName === ''){
            throw 'the name cannot be empty string'
        }
        this._name = newName 
    }
}

let pe1 = new Person('john ducket')
console.log(pe1.name)