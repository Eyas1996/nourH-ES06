console.log("***Hello form Object Destructuring File***");

const designer = {
  first_name: "Nour",
  last_name: "homsi",
  position: "Designer",
};

// const first_name = designer.first_name;
// const last_name = designer.last_name;
// const position = designer.position;

const { first_name: n, last_name, position } = designer;

console.log(n);
console.log(last_name);
console.log(position);
