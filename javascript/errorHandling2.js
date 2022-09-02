// console.log("hello")
// try{
//     somethingNotDefined;
// }
// catch(error){
//     console.log("Error is: " + error)
// }
// console.log("something after")
// function helloAll(){
//     try{
//         console.log(" In try block");
//         //somethingNotDefined;
//         throw new Error("Dummy error")
//         console.log(" PRINTTTTTTTTTTTTTT ")
//     }
//     catch(someError){
//         console.log("Error: "+ someError)
//     }
//     finally{
//         console.log("Always going to execute")
//     }
// }

// helloAll()
// function byeAll(){
//     try{
//         console.log(" Good Bye");
//     }
//     catch(someError){
//         console.log("Error: "+ someError)
//     }
// }

// helloAll();
// console.log('---------------------');
// byeAll();
// console.log('Node Server is Running !!!!');

// Try Catch and Finally 

// Try :  Test a code for errors

// Catch: Handle this error / Create custom error messages and warnings

// Finally: this will always run

// try{
//     console.log(' Lets try to Catch a Fish')
//     var x = 5;
//     x = x + 5;
//     console.log(x)
//     somethingNotDeclared;
//     console.log(' I have tried everything, But did not catch any Fish')
    
// }
// catch(newError){
//     console.log("Error Occurred: " + newError)
// }
// finally{
//     console.log('always run this')
// }


// Arrow function
// 5x + 7y*y + 40
func2 = (x,y) => {
    try{
        return ((5*x)+(7*y*y)+40)
    }
    catch(someError){
        return someError.message
    }
}
var answer = func2(2,5)
console.log(answer)