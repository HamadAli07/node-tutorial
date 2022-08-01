const {readFile , writeFile } = require ('fs');

readFile('./Content/textFirst.txt', 'utf8' , (err,result) => {
    if (err) {
    console.log(err);
    return;
    }
    const first = result;
    readFile('./Content/textSecond.txt', 'utf8' , (err,result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./Content/FS-Asyc.txt','Here is result '+ first + second, (err,result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})