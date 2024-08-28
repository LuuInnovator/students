const readline = require('readline-sync');
const { displayStudents } = require('./display');
const { addStudent } = require('./addStudent');
const { editStudent } = require('./editStudent');
const { searchStudent } = require('./searchStudent');

function mainMenu() {
    console.log('1. Hiển thị toàn bộ sinh viên');
    console.log('2. Thêm sinh viên');
    console.log('3. Sửa thông tin sinh viên');
    console.log('4. Tìm kiếm sinh viên');
    console.log('5. Thoát');

    const choice = readline.question('Chon chuc nang: ');

    switch (choice) {
        case '1':
            displayStudents();
            break;
        case '2':
            addStudent();
            break;
        case '3':
            editStudent();
            break;
        case '4':
            searchStudent();
            break;
        case '5':
            console.log('Thoat chuong trinh.');
            return;
        default:
            console.log('Chon khong hop le.');
    }
    
    mainMenu(); // Quay lại menu chính
}

// Bắt đầu chương trình
mainMenu();
