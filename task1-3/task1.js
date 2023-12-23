const prompt = require('prompt-sync')();

function uniqueOnly(input){
    let result = {};
    for(let i = 0;i<input.length;i++){
        if(!result[input[i]]){
            result[input[i]] = 0;
        }
    }
    return Object.keys(result).map(Number);
}

(() => {
    // Ctrl + Z to end line while providing input.
    // const integers = fs.readFileSync(0).toString().split(" ")
    const integers = (prompt()).toString().split(" ");
    console.log(uniqueOnly(integers))
})()