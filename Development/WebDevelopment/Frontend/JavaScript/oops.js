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


//! Public, Private, Protected
class temp {
  #name;
  constructor() {
      this.#name = "temp"; //- Private
      this._name = "temp"; //- Protected
      this.name = "temp"; //- Public
  }
}




//! Getter and Setter
//* Getter and Setter are used to get and set the properties of an object/Class
//* Getter and Setter name should be same as property name
//* Getter and Setter both defined or neither of defined
class Circles{
    constructor(radius){
        this.radius=radius;
    }
    //- Getter
    get radius(){
        //- always return value 
        return this._radius;
    }
    //- Setter
    set radius(value){
        //- do not return value
        this._radius=value/2;
    }
}
  
const c=new Circles(10);
console.log(c.radius); //5


//- In Constructor Function
function Circle(radius){
  this._radius = radius;

  //- Getter & Setter
  Object.defineProperty(this,'radius',{
    get:function(){
      return this._radius;
    },
    set:function(value){
      this._radius=value;
    }
  });

}