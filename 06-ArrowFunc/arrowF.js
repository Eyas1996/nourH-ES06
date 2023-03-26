console.log("***Hello form Arrow Function File***");

// Arrow Function


// const square = function square(n) {
//   return n * n;
// }

// Fat Arrow 
// const square = n => {
//   return n * n;
// }

const square = n =>  n * n;
console.log(square(5));


// -----------------------------------------------------

const designers = [
  {name: "Nour", free: true},
  {name: "Anas", free: false},
  {name: "majed", free: true},
];

// const freeDesigner = designers.filter(function(designer) {
//   return !designer.free
// });

const freeDesigner = designers.filter(designer => !designer.free);

console.log(freeDesigner[0].name);