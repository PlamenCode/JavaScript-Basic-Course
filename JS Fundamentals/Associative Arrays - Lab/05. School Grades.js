function schoolGrades(input) {
    let students = {};

    for (let line of input) {
        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let gradeToAdd = '';

        for (let grade of lineArr) {
            gradeToAdd += grade + ' ';
        }

        if (!students[name]) {
            students[name] = gradeToAdd;
        } else {
            students[name] += gradeToAdd;
        }
    }

    let entries = Object.entries(students);
    for (let entry of entries) {
        let grades = entry[1].split(' ');
        let gradeCount = 0;
        let gradeSum = 0;
        for (let grade of grades) {
            gradeCount++;
            gradeSum += Number(grade);
        }
        let avgGrade = gradeSum / (gradeCount - 1);
        students[entry[0]] = avgGrade;
    }

    let sortedStudent = Object.entries(students);
    sortedStudent.sort((kvp1, kvp2) => kvp1[0].localeCompare(kvp2[0]));

    for (const entry of sortedStudent) {
        console.log(`${entry[0]}: ${entry[1].toFixed(2)}`);
    }


}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])