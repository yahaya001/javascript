
let apidata = true
let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (apidata){
            resolve('im resolved') 
         }
         reject('im rejected')
    }, 1000)
});

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}).finally((message)=>{
    console.log(`promises settled`)
})