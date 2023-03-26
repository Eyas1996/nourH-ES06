console.log("***Hello form Array-Map File***");

const names = ["Nour", "Majed", "Anas"];

// for Loop 
// const itmes = [];
// for(let i = 0; i < names.length; i++) {
  //   let list = `<li>${names[i]}</li>`;
  // itmes.push(list)  
  
  // }
  // console.log(itmes);
  
  
  // for Each Loop 
  names.forEach((li) => console.log(`<li>${li}</li>`))
  
  // Map
  const items = names.map((li) => `<li>${li}</li>`) 
  console.log(items)



