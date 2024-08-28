const fs = require('fs');

function readData() {
    try {
        const data = fs.readFileSync('data/Student.json');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function writeData(data) {
    fs.writeFileSync('data/Student.json', JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
