
// Task 1 – Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

fruits.push("Pineapple");
console.log("After adding Pineapple:", fruits);

fruits.push("Grapes");
console.log("After adding Grapes:", fruits);



// Task 2 – Object

let student = {
    name: "Thanush",
    age: 21,
    skills: ["JavaScript", "HTML", "CSS"]
};

console.log("Student name:", student.name);
console.log("Second skill:", student.skills[1]);

student.skills.push("React");
console.log("After adding new skill:", student);



// Task 3 – Array of Objects

let students = [
    { name: "Aarav", marks: 85 },
    { name: "Isha", marks: 90 },
    { name: "Karan", marks: 78 }
];

console.log("Marks of second student:", students[1].marks);

students.push({ name: "Meera", marks: 88 });
console.log("After adding new student:", students);