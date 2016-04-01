// create function called createAdder
// takes in base number


function createAdder(baseNumber){
  return function(numberToAdd) {
    console.log(baseNumber + numberToAdd);
  };
}

function greetMaker(name){
  function greet(){
    console.log('Hello ' + name + '!');
  }
  return greet;
}

// var greetMo = greetMaker('Mo');
// greetMo();

var addTen = createAdder(10);

addTen(2);
addTen(0);
