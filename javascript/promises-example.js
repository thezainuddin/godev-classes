let done = true;
const isItDoneYet = new Promise((resolve,reject)=> {
    if (done){
            resolve("Work done");
        
    }
    else{
        reject("Still Working on Something")
    }
})

console.log("Before consuming the promise")
isItDoneYet
.then(ok => {
    console.log(ok)
    console.log("After consuming the promise")
})
.catch(problem => console.log(problem))
