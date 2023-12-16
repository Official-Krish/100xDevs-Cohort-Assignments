// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs= require('fs');
function newF(){
    fs.readFile("a.txt","utf-8",function(err, data) { 
        let ans = data.replace(/\s+/g, " ").trim();
        fs.writeFile("a.txt", ans, 'utf8', function(err,data)  {
        });
    })
    fs.readFile("a.txt","utf8",function(err, data) {  
        console.log(data);
    })
      
    
}
newF();






