// console.log(process);
// Object.keys(process);



// Output a prompt
process.stdout.write('prompt > ');

var commands = require('./commands');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

    var cmd = data.toString().trim(); // remove the newline

    // str with command 
    var arg;
    if(cmd.length > 2){
        arg = cmd.split(" ")
        // console.log(cmd);
    } 
    var coms = arg[0];
        
    commands[coms](arg.slice(1));


//   process.stdout.write('You typed: ' + cmd);
 

});

