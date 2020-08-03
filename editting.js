/*let allNames = [];
const addFull = (ev)=>{
    ev.preventDefault();
    let fullName = {
        firstName: document.getElementById('firstName').innerHTML,
        lastName: document.getElementById('lastName').innerHTML
    };
    allNames.push(fullName);
    document.forms[0].reset();

    console.warn('added', {allNames});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(allNames, '\t',2);
};
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addFull);
});*/

/*var fs = require('fs');

fs.readFile( 'mainuser.txt','utf8', function(err, data){
    if(err) throw err;
console.log(data);
});*/

/*false.watch('mainuser'), (click, mainuser.text) => {
    console.log('event type is: ${eventType');
    if(mainuser){
        console.log('mainuser:${mainuser.txt');

    }else {
        console.log('mainuser not provided');
    }
};

false.watch('mainuser', (curr, prev)=>{
    console.log ('the current mtime is:$(curr,mtime}');
    console.log('the previous mtime: ${prev.mtime}');
});*/

var follow = require('text-file-follower');

var follower = follow('week6_mainuser.txt')

follower.on('line', function(filename, line){
    console.log(line);
});

console.log('line added');