const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promost and send the error to the Promise's ` .catch()` method
            if (err) {
                reject(err);
                // return out of function here to make sure the Promise does not accidentally excecute the resolve() function as well
                return;
            } 

            // if everything went well. resolve the Promise and send the successfgul data to the ` .then()` method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });   
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};