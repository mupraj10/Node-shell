 module.exports= {
     // return current working directory
     pwd: function(){
            process.stdout.write(process.cwd());
            process.stdout.write('\nprompt > ');
     },
     date: function(){
         var now = new Date();
         process.stdout.write('Today’s Date ' + now);
         process.stdout.write('\nprompt > ');
         
     },
     ls: function(){
         var fs = require('fs');
          fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() +"\n");
             })
            process.stdout.write("prompt > ");
        });
     },
     echo: function(arg){
           process.stdout.write(arg.join(" ")+ '\n');  
           process.stdout.write("prompt > ");
     },
     
     cat: function(arg){
        //  console.log(arg);
         var fs = require('fs')
         var fileName = arg.join("")
        //  console.log("filename:"+ fileName);
         fs.readFile(fileName, function(err, data){
            if (err) throw err;
            process.stdout.write(data);
            process.stdout.write("prompt > ");
        });
     },
     head: function(arg){
         var fs = require('fs')
         var fileName = arg.join("")
         fs.readFile(fileName, function(err, data){
            if (err) throw err;
            var allCode = data.toString().split('\n');
            var code10 = [];
            for(var i = 0; i < 5; i++){
                code10.push(allCode[i]);
            }
            code10 = code10.join('\n');
            process.stdout.write(code10 + '\n');
            process.stdout.write("prompt > ");
        });
     }, 
     //work on tail reverse
     tail: function(arg){
         var fs = require('fs')
         var fileName = arg.join("")
         fs.readFile(fileName, function(err, data){
            if (err) throw err;
            var allCode = data.toString().split('\n');
            var code10 = [];
            console.log("length all code:" + allCode.length)
            for (var i = allCode.length-1; i > (allCode.length-5); i--){
                code10.push(allCode[i]);
                console.log(code10)
            }
            code10 = code10.join('\n');
            process.stdout.write(code10 + '\n');
            process.stdout.write("prompt > ");
        });
     }
 }
  
//  process.stdout.write('\nprompt > ')
