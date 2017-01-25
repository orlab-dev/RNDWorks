/**
 * http://usejsdoc.org/
 */
    var global = require('../model/global')
    var fs = require('fs')
    
    
    var PDFParser = require("pdf2json");
 
    var pdfParser = new PDFParser(this,1);
 
    
    var input = process.openStdin();

    input.addListener("data", (path) => {
        console.log("File Path : [" + 
            path.toString().trim() + "]");
        console.log('Type Your PDF path : ');
         global.setFilePath(path);
         
         
      });

    
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
	

	global.setFileBuffer(pdfParser.getRawTextContent());
	fs.writeFile("./src/res/pdf-sample.content.txt", global.getFileBuffer());
	
    });
 
pdfParser.loadPDF("./src/res/pdf-sample.pdf");
module.export = this;