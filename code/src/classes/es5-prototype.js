#!/usr/bin/env node

var person = {
  greet: function() {
    return "Hello " + this.name;
  }
};

var christian = Object.create(person);

christian.name = "Christian";

console.info(christian.greet());
// > Hello Christian
