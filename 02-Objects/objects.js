console.log("***Hello form Objects File***");

// Object
const designer = {
  name: "Eyas",
  programs() { // وظيفة
    console.log(this);
  }
};

console.log(designer.name);
designer.programs(); // استدعاء الوظيفة

// تخزين نسخة عن الوظيفة
let prog = designer.programs.bind(designer);

prog(); // استدعاء النسخة عن الوظيفة