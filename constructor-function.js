// This is a basic prototype
// It is not a class in the sense of ES6 classes
function Student(name, age, points) {
  this.name = name;
  this.age = age;
  this.points = points;
}

const Juana = new Student('Juana', 20, 1);

const voidObject = {};

// Juana is an instance of the Student class
// But also receives the properties from the prototype Object

console.log(Juana);

// voidObject is an instance of the Object class

console.log(voidObject.toString());
