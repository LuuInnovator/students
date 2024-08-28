const readline = require('readline-sync');
const { readData, writeData } = require('./readWrite');

function editStudent() {
    const students = readData();
    const id = readline.question('Nhap ID sinh vien can sua: ');
    const student = students.find(s => s.id === id);
    
    if (!student) {
        console.log('Sinh vien khong ton tai.');
        return;
    }

    student.name = readline.question('Nhap ten moi (hien tai: ' + student.name + '): ') || student.name;

    let moreCourses = true;

    while (moreCourses) {
        const course = readline.question('Nhap mon hoc moi de tiep tuc: ');
        if (!course) break;
        
        const existingCourse = student.courses.find(c => c.course === course);
        if (existingCourse) {
            existingCourse.grade = readline.question('Nhap diem moi (hien tai: ' + existingCourse.grade + '): ') || existingCourse.grade;
        } else {
            const grade = readline.question('Nhap diem thi: ');
            student.courses.push({ course, grade });
        }
        
        moreCourses = readline.keyInYNStrict('Them mon hoc khac?');
    }

    const removeCourse = readline.keyInYNStrict('Xoa mon hoc nao khong?');
    if (removeCourse) {
        const courseToRemove = readline.question('Nhap ten mon hoc can xóa: ');
        student.courses = student.courses.filter(c => c.course !== courseToRemove);
    }

    writeData(students);
    console.log('Thong tin sinh vien da duoc cap nhat!');
}

module.exports = { editStudent };
