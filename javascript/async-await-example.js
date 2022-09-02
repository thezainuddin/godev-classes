const dummyPromise = new Promise ( (resolve, reject)=>{
    const x = true;
    if (x){
        setTimeout(()=>{
            resolve("5000");
        },2000);
    }
    else {
        reject("Promise is Rejected, I can't come to School!!")
    }
});


// dummyPromise
//     .then((successMessage) => {
//         console.log(successMessage)
//         console.log("return the machine to next class")
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage)
//     })

async function exampleFunction(){
    try{
    let result = await dummyPromise;
    let newResult = result*2;
    console.log("Send this data to frontend "+ newResult)

    }
    catch(customError){
        console.log('Error is '+customError)
    }
    // console.log(result)
}


exampleFunction();