//its recommended to use for of loop when iterating array becouse its built for it
let list = ['john', 'doe', 'habeeb',536, 839, 648, 8437, 'ismaeel', 'muhammad',];

let list2 = ['isah', 'sani', 'ibrahim', 'muhammad']

for(let sp = 0; sp<list2.length; sp++){
  list.push(list2[sp])
}

for(let counter = 0; counter<list.length; counter++){
    if(typeof(list[counter]) == 'string'){
      console.log(list[counter])  
    }    
}


/** DISTRUCTURING AN ARRAY */

let numbers = [1,2,3,4,5,6,7,8,9,10]
let [one,two,three,four,five,six,seven,eight,nine,ten]= numbers
//console.log(ten)

/** split(' ') method convert string var into list of array */

let introduce = "ASSALAMU ALAIKUM MY NAME IS YAHAYA ABUBAKAR I'M JUNIOR SOFTWARE DEVELOPER".split(' ');

//let inlen = introduce.length;
/**let sp = 0;
while(sp<introduce.length){
  console.log(introduce[sp])
  sp++
  }*/

console.log('---------------')
console.log('---------------')
console.log('---------------')
  let students = [
    {name : 'yahaya24', depart : 'information tech', tech : 'python', performance : 80},
    {name : 'ibraheem', depart : 'computer science', tech : 'javascript', performance : 70},
    {name : 'muhammad', depart : 'information tech', tech : 'sql', performance : 55},
    {name : 'habeeb', depart : 'civil engineering', tech : 'estate design', performance : 90},
    {name : 'usman', depart : 'future tech', tech : 'machine learnig', performance : 64},
]

let graduated = students.filter(function(e){
  return e.performance>=70;
}).forEach((e) => {console.log(e.name)})

//FROM BELOW TO FILTER GRADUATED AND NON GRADUTAED OBJECT 
// USING FOR LOOP AND NOW I WILL TRY TO SOLVE IT USING BUILTIN METHOD OF filter ABOVE  
// let graduated = []
// let ungraduated = []
// for(let i = 0; i<students.length; i++){
//   if(students[i].performance>=70){
//     graduated.push(students[i])
//     //console.log(i+1, students[i].name, students[i].tech, students[i].depart,  students[i].performance+'%')
//   }
//   else{
//     ungraduated.push(students[i])
//   }
 
// } 

// console.log(ungraduated)
// console.log(graduated)
//console.log(`${student.name} ${student.depart}  ${student.tech}`)