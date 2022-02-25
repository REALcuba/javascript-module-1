const numberOfStudents = 15;
const numberOfMentors = 8;

 const total=(numberOfStudents+numberOfMentors);
const studentsPercent = (numberOfStudents/total)*100;
const mentorsPercent = (numberOfMentors/total)*100;
console.log("Percentage students : " , Math.round(studentsPercent),"%");
console.log("Percentage mentors : " , Math.round(mentorsPercent),"%");