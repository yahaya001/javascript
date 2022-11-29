function Student(name, depart, tech){
    this.name = name;
    this.depart = depart;
    this.tech = tech;
}


let student1 = new Student('yahaya24', 'information tech', 'python')
let student2 = new Student('ibraheem', 'computer science', 'javascript')
let student3 = new Student('muhammad', 'information tech', 'sql')
let student4 = new Student('habeeb', 'civil engineering', 'estate design')
let student5 = new Student('usman', 'future tech', 'machine learnig')
let student6 = new Student('isah1190', 'information tech', 'frontend dev')
let student7 = new Student('sani', 'information tech', 'aws & railway.app')

for (key in Student){
    console.log(key)
}