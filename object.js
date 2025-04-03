const natalia = {
  name: 'Natalia',
  age: 20,
  approvedCourses: ['Curso de React', 'Curso de Next.js'],
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

natalia.approveCourse('Curso de Node.js');

console.log(natalia);

function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
}

Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
};

const juan = new Student('Juan', 20, ['Curso de React', 'Curso de Next.js']);

console.log(juan);

juan.approveCourse('Curso de Node.js');

console.log(juan);
