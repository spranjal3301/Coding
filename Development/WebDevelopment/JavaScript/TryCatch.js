//!TryCatch
//*Throw and Catching the Errors


function sum(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw "Error a and b should be numbers";
        }
        
    } catch (err) {
        console.log(err);
    }

    console.log("Always executed in case of error as well");
    return a + b;
}

console.log(sum(1, "2"));