import { Designer } from "./Designer.js";

console.log("***Hello form WebDesigner File***");

export class WebDesigner extends Designer {
  constructor(name, skill, location) {
    super(name, skill);
    this.location = location;
  }
  programming() {
    console.log("JavaScript");
  }
}
