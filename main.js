
//const ExcelJS = require('exceljs');
let reader = require('any-text');
let text = reader.getText(`./id.docx`);
let obj = text.then(function (data) {
    console.log(get(data));
});

function get(data) {
    let dataPers = [];
    let List = data.split(', ');
    let i = 0;
    while (i < List.length) {
        let p = List[i].split(':');
        let value = p[1];
        dataPers.push(value);
        i++;
    }
    return dataPers;
}