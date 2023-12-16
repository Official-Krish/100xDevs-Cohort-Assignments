// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const contentToWrite = 'Hello, this is the content to be written to the file!';
const filePath = 'Write.txt';

fs.writeFile(filePath, contentToWrite, 'utf8', function(data,err)  {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log("file written successfully!");
    }
});


fs.readFile("Write.txt","utf-8",function(err,data){
    console.log(data);
})