const os = require('os');

// os хранит в себе всё полезную информацию о системе
console.log(os.platform()); // платформа (у меня win32)
console.log(os.arch()); // архитектра (у меня x64)
console.log(os.freemem()); // сколько свободной памяти
console.log(os.homedir()); // сколько всего памяти