//! call keyword:
//* call() pass the current exution context to the function
//* call() is used to call a function with a given this value and arguments provided individually.
//* call replace with current 'this' to the given 'this'

function setUserName(name) {
    this.name = name; // - 'this' is of createUser context 
}

function createUser(name,password) {
    this.password = password;

    // setUserName(name);  //- Its extution context is global object and distroy after execution 
    setUserName.call(this, name); //- It will not distroy after execution it will use createUser context(this)
}



//! apply keyword:
//* apply() is used to call a function with a given this value and arguments provided as an array
//* apply() replace with current 'this' to the given 'this'

function setUserName(name) {
    this.name = name; // - 'this' is of createUser context 
}

function createUser(name,password) {
    this.password = password;

    // setUserName(name);  //- Its extution context is global object and distroy after execution 
    setUserName.apply(this, [name]); //- It will not distroy after execution it will use createUser context(this)
}






//! bind keyword:
//* bind() return a new function with the current exution context
//* same as call to it not replace the current 'this' with given 'this' 
//* it addes both (this's)function context

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.hello + " " + this.lastName;
    }
  }
  
  const member = {
    hello:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member); // Will return a new function that will have the 'this' value of member

  console.log(fullName()); // Will return "Hege Nilsen"



//! variable constrol

const obj = {
  name:"Pranajal",
  age: 23
}


Object.getOwnPropertyDescriptor(obj,'name'); //- {value: "Pranajal", writable: true, enumerable: true, configurable: true}

Object.defineProperty(obj,'name',{
  writable:false
}); //- {name: "Pranajal", age: 23}

obj.name = "Pranjal"; //- Error: Cannot assign to read only property 'name' of object '#<Object>'


//! Pure Function