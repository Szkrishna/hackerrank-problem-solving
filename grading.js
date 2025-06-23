function gradingStudents(grades) {
    let newGrades = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38 || grades[i] % 5 == 0 || grades[i] % 5 == 1 || grades[i] % 5 == 2) {
            newGrades.push(grades[i]);
        } else if (grades[i] % 5 == 3) {
            newGrades.push(grades[i] + 2);
        } else if (grades[i] % 5 == 4) {
            newGrades.push(grades[i] + 1);
        }
    }
    return newGrades;
}


const grades = [85, 92, 76, 38, 92, 67, 95, 31, 37, 100];
const result = gradingStudents(grades);
console.log(result);