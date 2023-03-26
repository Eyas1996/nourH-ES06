import { Designer } from "./Designer.js";

console.log("***Hello form WebDesigner File***");

export function work() {
  console.log("It's Working");
}

export default class WebDesigner extends Designer {
  constructor(name, skill, location) {
    super(name, skill);
    this.location = location;
  }
  programming() {
    console.log("JavaScript");
  }
}
