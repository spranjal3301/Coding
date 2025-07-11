//!Typescript APIs

//` Advanced Types
//* Decorators
//* Namespaces
//* Declaration Merging
//* Triple-Slash Directives
//* Type Checking JavaScript Files
//* Mixins
//* Emitting Decorators Metadata
//* Emitting with Source Maps


//`Pick:
//* Pick<T, K> Constructs a type by picking the set of properties K from T
//* works like a filter for the properties of an object type.
//? Example:
interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
type  Todos= {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview1 = Pick<Todos, "title" | "completed">;



//`Partial:
//* Partial<T> Constructs a type with all properties of T set to optional.
//? Example:
type optinalTodo = Partial<Todo>;

//-How its work: Coverted all properties of Todo to optional
//? type optinalTodo = {
//?     title?: string | undefined;
//?     description?: string | undefined;
//?     completed?: boolean | undefined;
//? }




//`Readonly:
//* Readonly<T> Constructs a type with all properties of T set to readonly,
//* meaning the properties of the constructed type cannot be reassigned(make const).
//? Example:
//!M01
type readOnlyTodo = Readonly<Todo>;

//!M02
type readOnlyTodo2 = {
    readonly title: string;
    readonly description: string;
    readonly completed: boolean;
}

//Todo.title="" X can't reassign the value of the properties of the object of type readOnlyTodo




//`Record: 
//* Record<K, T> Constructs an object type whose property keys are K and whose property values are T.
//* When you have dynamic keys and need a fixed value type associated with each key.
//* When you want to avoid manually defining every possible key in an object type,
//* but still want to ensure type safety for values.
//? Example:
type TodoRecord = Record<string, Todo>;

type Users = {
    id: number;
    name: string;
  };
  
  const users: Record<string, Users> = {
    "user1": { id: 1, name: "Alice" },
    "user2": { id: 2, name: "Bob" },
  };



//`Map<key,value>:(js) 
const map = new Map<string, number>();
map.set('foo', 1);
map.set('bar', 2);

map.get('foo'); // 1


//`Exclude:
//* Exclude<T, U> Constructs a type by excluding from T all properties that are assignable to U.
//? Example:
type T0 = Exclude<Todo,'title'>; //? {description: string; completed: boolean;}

//`Extract:
//* Extract<T, U> Constructs a type by extracting from T all properties that are assignable to U.
//? Example:
type T1 = Extract<Todo,'title'>; //? {title: string;}


//`Omit:
//* Omit<T, K> Constructs a type by picking all properties from T and then removing K.
//? Example:
type T2 = Omit<Todo,'title'>; //? {description: string; completed: boolean;}





//` Decorators
//* TypeScript are a special type of declaration that can be attached to classes, methods, accessors, properties, or parameters. 
//* provide a way to add metadata or modify the behavior of the decorated element in a declarative and reusable manner. 
//- It is similar to middlwares where add a funtionalty to class, Methods and function
//- Example use Case : decorators for measure time taken for every function


//- Pre build helpful-decorators
// npm install helpful-decorators
// https://github.com/NetanelBasal/helpful-decorators

// tsconfig.json
// {
//   "compilerOptions": {
//     "experimentalDecorators": true
//   }
// }

//- Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

