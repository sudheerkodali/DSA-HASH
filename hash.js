# DSA-HASH
Hash and its types in DSA


# you use the key as a property name
const obj = {
  name: 'Sudheer Kodali',
  age: 30,
  city: 'Bengalore'
};
console.log(obj.name);



# key-value pairs, such as get, set, and delete
const map = new Map();
map.set('name', 'Sudheer Kodali');
map.set('age', 30);
map.set('city', 'Bengalore');

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

addStudent('Sudheer', 95);
addStudent('Chowdari', 80);
addStudent('Kodali', 70);

console.log(getStudentGrade('Sudheer')); 
console.log(getStudentGrade('Chowdari')); 
console.log(getStudentGrade('Kodali'));
