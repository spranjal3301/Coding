//!JavaScript is "prototype based language"  
//!Class are "Primarily Syntactic Sugar" (just of namek)

//!Object literals syntax
const car = {type:"Fiat",
             model:"500",
             color:"white" ,
            fullName : function() {return this.color + " " + this.model;} 
}; 
//* type,model,color --> propertys
//* fullName ---> Method

//!Factory Function
function circle(radius){
    return{
        radius,  //* if key and value(radius:radius) are same then we can remove value (radius)
        draw:function(){
            console.log("Draw");
        }
    }
}
//~New Keyword
//* in JavaScript is used to create an instance of an object by calling the constructor method 
//* it prevent to create Global instance
//* "new" does three things
        //? Create Empty Object
        //? "this" point Empty Object
        //? return this;
//!Constructor Function
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("Draw");
    }
}
const c1=new Circle(10);

//! Class Key word are "Primarily Syntactic Sugar"
class MyClass {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, ${this.name}!`);
    }
  
    static staticMethod() {
      console.log('This is a static method.');
    }
  }
  
  // Creating an instance of the class
  const myInstance = new MyClass('John');
  
  // Calling instance method
  myInstance.sayHello();
  
  // Calling static method
  MyClass.staticMethod();
  