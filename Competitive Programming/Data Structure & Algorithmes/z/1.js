let n=9;
let m=9;
const arr = Array.from({ length: n }, () => Array(m).fill(0));
const arr1=[];
arr1.push([1,2]);
console.log(arr1);
arr1.shift();
const directions = [
    [1, 0], // Down
    [-1, 0], // Up
    [0, 1], // Right
    [0, -1], // Left
];

for (const [dx, dy] of directions) {
    // const x = i + dx;
    // const y = j + dy;
}
for(elements of directions){
    elements.forEach(element => {
        console.log(element);   
    });
}
let obj={};multiverse-neon