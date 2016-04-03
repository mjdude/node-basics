var person = {
  name:'Mo',
  age: 24,
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLANGE AREA');

var animal = '{"name": "Halley"}';

var animalObject = JSON.parse(animal);
animalObject.age = 11;

console.log(animalObject);

var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
