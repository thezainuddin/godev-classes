// Try Catch Finally (Keywords)



// connect mongoDb   OBJMONGO

// Try:   test a code for errors
        // find student document  (Not able to connect)
        // filter it, I want to get score for Ali   
        // Add all previous scores 
// Catch:  Handle this error / Custom errors (JSON)

// finally:  This will always run

//somethingNotDeclared;
try {
    console.log("Lets Try to Catch Fish");

    somethingNotDeclared;   //mistake

    console.log("I have tried everything, Didnt catch any error")
}
catch(err){
    console.log(err);
    console.log("Catched a fish, Error Received ");
}

finally{
    console.log("always run this")
}