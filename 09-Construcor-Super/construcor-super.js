console.log("***Hello form Classes File***");

// Classes OOP  // super(param);

class Designer {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }
  skills() {
    return `${this.skill}`;
  }
}

// ---------------------------------------------------

class WebDesigner extends Designer {
  constructor(name, skill, location) {
    super(name, skill);
    this.location = location;
  }
  programming() {
    console.log("JavaScript");
  }
}

const webDesigner = new WebDesigner("Majed", "UI&UX", "Syria");
console.log(webDesigner);
console.log(webDesigner.name);
console.log(webDesigner.skill);
console.log(webDesigner.location);
