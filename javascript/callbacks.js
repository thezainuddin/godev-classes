// console.log(" Student 1");

// setTimeout(()=>{
//     console.log(" Student 2");      // By Walk
// },2000);

// console.log(" Student 3");


// myfunc = function(anyParameter){
//     console.log("Hello I am not an arrow Function "+ anyParameter)
// }

// myfunc2 = (anyParameter) => {
//     console.log("Hello I am an ARROW function "+anyParameter)
// }

// myfunc("someParameter")
// myfunc2(400)

// sumArrowFunc = (x,y) => console.log(x+y)

// sumArrowFunc(4,5) // 9

// var data1 = 1000;
// func1 = () => {
//     var data2 = 2000;       // local variable
//     console.log(data1)
//     console.log(data2)
// }
// func2 = () => {
//     console.log(data1 + 100)
// }

// func1()
// func2()


const myDummyDatabasePromise = new Promise ( (resolve, reject)=>{
    const x = false;
    if (x){
        setTimeout(()=>{
            resolve("Student has arrived, Attendence Completed");
        },5000);
    }
    else {
        reject("Promise is Rejeced!!")
    }
});

// How to use promises

myDummyDatabasePromise
.then((successMessage) => {
    console.log(successMessage)
    // insert data NetworkInformation,
    // delete data NetworkInformation
    // do data query
})
.catch((errorMessage) => {
    console.log(errorMessage)
})
