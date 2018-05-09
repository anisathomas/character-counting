//today we'll xxplore objects
'use Strict';
//object:
//first way to declar object:
//use split to split up an array at (' ')

var course = {
  nameOfCourse: "Web Development Bootcamp",
  startDate: "May 9, 2018",
  staff: ['Sumi', 'Saba']

};


//second way to declare object"\
course.students = []; // add students to the course object

course.students.push ("Sorin");
course.students.push("Sara");
course.students.push('Chantal');


//third way to declare object
course['teachers'] = ['Juan'];
course['staff'].push('Bella');
//teachers.push('Juan');

//why have two different ways? cuz bracket way is more dynamic
var newAttributeName = 'duration';
course.duration = 10;
course[newAttributeName] = 8;


//pass by reference
function changeDate (someCourse, newDate){
  someCourse.startDate = newDate;
  return;

}

 changeDate(course, 'May 7, 2018');


// console.log(course.nameOfCourse);
// console.log(course.startDate);
// console.log('Teachers', course.teachers);
// console.log('Students:', course.students);

console.log('Everything', course);
console.log("One of our student is ", course.students[2]);