const { readData } = require('./readWrite');

function displayStudents() {
    const students = readData();
    console.log('Danh sách sinh viên:');
    students.forEach(student => {
        console.log(`ID: ${student.id}, Tên: ${student.name}`);
        student.courses.forEach(course => {
            console.log(`  Môn học: ${course.course}, Điểm: ${course.grade}`);
        });
    });
}

module.exports = { displayStudents };
