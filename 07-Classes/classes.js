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

const designer_1 = new Designer("Nour", "Photoshop");
const designer_2 = new Designer("Eyas", "Developer");

console.log(designer_1);
console.log(designer_1.name);
console.log(designer_1.skills());
console.log("#######################");
console.log(designer_2);
console.log(designer_2.name);
console.log(designer_2.skills());
