// this refers to the context in which a function is invoked.
// In global scope, it refers to the global object (window in browsers).
// In a method, it refers to the object that owns the method.
// Arrow functions do not have their own this; they inherit from the surrounding scope

const obj = {
  name: "JavaScript",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => console.log(this.name),
};

obj.regularFunction(); // JavaScript (because `this` refers to `obj`)
obj.arrowFunction(); // undefined (because `this` refers to global scope)
