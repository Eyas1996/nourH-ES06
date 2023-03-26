console.log("***Hello form Array Spread File***");

const array_1 = [1, 2, 3];
const array_2 = [4, 5, 6];

// const arrays = array_1.concat(array_2);

const arrays = [...array_1,"فوت هلأ", ...array_2]


console.log(arrays);




const obj_1 = {name: "Eyas"};
const obj_2 = {position: "Developer"};

// const arrays = array_1.concat(array_2);

const objs = {...obj_1, ...obj_2, country: "Syria"}


console.log(objs);


