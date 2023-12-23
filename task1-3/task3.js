const prompt = require("prompt-sync")();

function intersect(arr1,arr2){
    let result = [];
    for(let i=0;i<arr1.length;i++){
        let curr = arr1[i];

        for(let j=0;j<arr2.length;j++){
            if(curr === arr2[j]){
                result.push(curr);
            }
        }
    }
    return result;
}

(() => {
    console.log("Integers of Array1");
    let array1 = (prompt()).toString().split(" ").map(a => parseInt(a))
    console.log("Integers of Array2")
    let array2 = (prompt()).toString().split(" ").map(a => parseInt(a))
    console.log(intersect(array1,array2))
})()