// const Stars=Array(5);
let x = null;
let y = undefined;
let z = 0;
let w = '';
let u = [];
let v = {};
let b=false;

console.log(u ?? y); // Output: "default"
console.log(y && "default"); // Output: "default"
console.log(z && "default"); // Output: "default"
console.log(w && "default"); // Output: "default"
console.log(u && "default"); // Output: []
console.log(v && "default"); // Output: {}
console.log(b && "default"); // Output: "default"
console.log(true && "default"); // Output: "default"
console.log(false ?? 0); // Output: "default"