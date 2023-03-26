console.log("***Hello form Designer File***");

export class Designer {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }
  skills() {
    return `${this.skill}`;
  }
}
