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