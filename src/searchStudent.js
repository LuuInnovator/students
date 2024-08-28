const readline = require('readline-sync');
const { readData } = require('./readWrite');

function searchStudent() {
    const students = readData();
    const searchTerm = readline.question('Nhap ten hoac ID sinh vien can tim: ');

    const result = students.filter(s => s.name.includes(searchTerm) || s.id.includes(searchTerm));
    
    if (result.length === 0) {
        console.log('Khong tim thay sinh vien.');
    } else {
        result.forEach(student => {
            console.log(`ID: ${student.id}, Ten: ${student.name}`);
            student.courses.forEach(course => {
                console.log(`  Mon hoc: ${course.course}, Diem: ${course.grade}`);
            });
        });
    }
}

module.exports = { searchStudent };
