// A closure is a function in which inner function has access to the
//outer function

function outerFunction(outerVariable) {
  return function middleFunction(middleVariable) {
    return function innerFunction(innerVariable) {
      console.log("Outer Variable:", outerVariable);
      console.log("Middle Variable:", middleVariable);
      console.log("Inner Variable:", innerVariable);
    };
  };
}

const middleFunction = outerFunction("outside");
const innerFunction = middleFunction("middle");
innerFunction("inside");

// Output:
// Outer Variable: outside
// Middle Variable: middle
// Inner Variable: inside
