
//const ExcelJS = require('exceljs');
var reader = require('any-text');
var text = reader.getText(`./id.docx`);
text.then(
    function (data) {
        console.log(data);
    }
);