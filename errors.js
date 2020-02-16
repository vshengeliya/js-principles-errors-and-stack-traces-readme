// Fix the error in the snackSelection code snippet to see the error from the function

const snackSelection = 'Pretzels';

if (snackSelection === 'Pretzels') {
  console.log("That'll be $1, please!");
}


function first () {
  second();
}

function second () {
  third();
}
function third () {
  console.log("Now I'm a function!");
}

first();
