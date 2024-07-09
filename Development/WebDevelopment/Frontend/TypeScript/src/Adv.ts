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
//* meaning the properties of the constructed type cannot be reassigned.
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
//? Example:
type TodoRecord = Record<string, Todo>;

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
