const readline = require('readline-sync');
const { readData, writeData } = require('./readWrite');

function addStudent() {
    const students = readData();
    const id = readline.question('Nhap ID sinh vien: ');
    const name = readline.question('Nhap ten sinh vien: ');
    
    const courses = [];
    let moreCourses = true;

    while (moreCourses) {
        const course = readline.question('Nhap mon hoc: ');
        const grade = readline.question('Nhap diem thi: ');
        courses.push({ course, grade });
        moreCourses = readline.keyInYNStrict('Them mon hoc khac?');
    }

    students.push({ id, name, courses });
    writeData(students);
    console.log('Da them sinh vien thanh cong!');
}

module.exports = { addStudent };
