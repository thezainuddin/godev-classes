
// // Print multiple of 2 numbers
// console.log(mul2numbs(5,10));  // expected answer = 50


// // Multiple 2 Numbers Function
// // Function Declaration:
// function mul2numbs (a,b){
//     let localResult = a*b;      // localResult is a local Variable
//     return localResult;
// }

// // Function Expressions 
// const mul2numbs = function (numb) { return numb*numb};
// console.log(mul2numbs(2));
// mul2numbs = 5
// console.log(mul2numbs);


// Recursive function  - process of calling itself

function stopWatchFunc (numb){
    console.log(numb)
    // decrement
    var NewNumb = numb - 1;

    // If number is greater than 0 keep calling stopWatchFunc 
    if (numb > 0){
        stopWatchFunc(NewNumb);
    }
}

stopWatchFunc(10);

