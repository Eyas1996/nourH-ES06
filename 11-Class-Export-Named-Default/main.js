import WebDesigner, { work } from "./Webdesigner.js";

// import React, { Component } form 'react'

// named export needs => {}
// default export don't needs => {}

console.log("***Hello form main File***");
const webDesigner = new WebDesigner("Majed", "UI&UX", "Syria");
console.log(webDesigner);
console.log(webDesigner.name);
console.log(webDesigner.skill);
console.log(webDesigner.location);

work();
