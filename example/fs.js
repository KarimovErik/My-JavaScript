const fs = require('fs');
const path = require('path');

// создаем папку
const dirPath = path.join(__dirname, 'test');
fs.mkdir( dirPath, (err) => {
    // проверяем наличие ошибки
    // например, если папка уже существет - то будет ошибка
    // если ошибки нет, то err = null
    if (err) {
        console.log(err);
        return;
    }
});

// создаём пть к файл
const filePath = path.join(__dirname, 'test', 'file.txt');

// записываем текст в файл
fs.writeFile(filePath, 'Hello! \n', (err) => {
    if (err) {
        // throw - оператор, который выбрасывает ошибку. Мы о нем еще поговорим
        throw err;
    }

    // если запись файла прошла успешно, пробуем добавить текст в конец
    fs.appendFile(filePath, 'WORLD!!!', (err) => {
        if (err) {
            throw err;
        }
    });
});

// fs.writeFile(filePath, 'World!', (err) => {
//     if (err) {
//         throw err;
//     }
// });

// считываем файл без кодировки (получим буфер)
fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err;
    }
    
    // content хранит в себе буфер.
    console.log(content);
    
    // Чтобы его перевести в строку, нужно его "распарсить"
    const dataContent = Buffer.from(content); 
    console.log(dataContent.toString());
});

// считываем файл с указыванием кодировки
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err;
    }

    // в отличии от предыдущего примера, мы получаем сразу понятный контент
    console.log(content);
});