
let testScores = [90, 80, 70, 60,];
let grades = ['A', 'B', 'C', 'D', 'F'];
let testScore = 50;
let grade;
 
if (testScore >= 90 && testScore <= 100) {
    grade = 'A';
} else if (testScore >= 80 && testScore <= 89) {
    grade = 'B';
} else if (testScore >= 70 && testScore <= 79) {
    grade = 'C';
} else if (testScore >= 60 && testScore <= 69) {
    grade = 'D';
 
} else {
    grade = 'F';
}
 
console.log(`grade: ${grade} and testScore: ${testScore}`);