/**
 * http://usejsdoc.org/
 */

/*
 * This File shows how we can use getter-setters in NodeJS
 */

//Just a CI Testing
var global = {
	__filePath : '',
	__fileBuffer : '',
	    
	
	getFileBuffer : () => {
	    return this.__fileBuffer;
	},
	
	setFileBuffer : (data) => {
	    this.__fileBuffer = data;
	},
	
	getFilePath : () => {
            return this.__filePath;
	},
	
	setFilePath : (path) => {
	    this.__filePath = path;
	}
};

module.exports = global;