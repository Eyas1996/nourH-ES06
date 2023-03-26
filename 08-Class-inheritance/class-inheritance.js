console.log("***Hello form Classes File***");

// Classes

class Designer {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }
  skills() {
    return `${this.skill}`;
  }
}

const designer = new Designer("Nour");
console.log(designer.name);

// ---------------------------------------------------

class WebDesigner extends Designer {
  programming() {
    console.log("JavaScript");
  }
}

const webDesigner = new WebDesigner("Majed", "UI&UX");
console.log(webDesigner);
console.log(webDesigner.name);
