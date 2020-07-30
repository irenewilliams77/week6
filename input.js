
const readline =require("readline") 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?", function saveInput(name){
    console.log (`Hi ${name}`),

rl.question("What is your quest to seek the holy grail?"), function saveInput(answer){
    console.log (`I wish you well ${name}`),

rl.on("close", function saveInput(){
    console.log("\nBye ");
    process.exit(0);
});
}})
