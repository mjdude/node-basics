var grades = [100, 50, 75];
var totalGrade = 0;

grades.forEach(function(grade){
  totalGrade += grade;
});

console.log(totalGrade);
console.log(totalGrade/grades.length);
