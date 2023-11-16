# DSA-HASH
Hash and its types in DSA

# you use the key as a property name
const obj = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};
console.log(obj.name);

# key-value pairs, such as get, set, and delete
const map = new Map();
map.set('name', 'John Doe');
map.set('age', 30);
map.set('city', 'New York');

console.log(map.get('name'));

# hash table to store a list of student names and grades
const students = {};

function addStudent(name, grade) {
  const index = hash(name);
  if (!students[index]) {
    students[index] = [];
  }

  students[index].push({ name, grade });
}

function getStudentGrade(name) {
  const index = hash(name);
  const studentList = students[index];

  if (studentList) {
    for (const student of studentList) {
      if (student.name === name) {
        return student.grade;
      }
    }
  }

  return null;
}

function hash(name) {
  // Implement a hash function here
}

addStudent('Alice', 95);
addStudent('Bob', 80);
addStudent('Charlie', 70);

console.log(getStudentGrade('Alice')); 
console.log(getStudentGrade('Bob')); 
console.log(getStudentGrade('Charlie'));
