
const readline =require("readline"); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What is your name?`,(name)=>{
    r2.question(`What is your quest to seek the holy grail?`, (naswer)=>{ 
        var results = (+name) + (+naswer);
        console.log(`Hi ${name}" + "Wish you well on your quest ${naswer}`);
    });
    rl.close();
});
    
