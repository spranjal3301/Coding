//!Lexical Scoping:
//- Lexical scoping (sometimes known as static scoping ) is a convention used with many programming languages that sets the 
//- scope of a variable so that it may only be called from within the block of code in which it is defined.

function init() {
    var name = "Mozilla";
    function displayName() { //- displayName() having lexical scope of init() function
        console.log(name);   //- displayName() have share memory of init() function
    }
    displayName();
}



//!Closure
//- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).


function init() {
    var name = "Mozilla";
    function displayName() { 
        console.log(name);   
    }
    return displayName; //- displayName() is a closure
}                       //- displayName() bundled together with references to its surrounding state (the lexical environment).