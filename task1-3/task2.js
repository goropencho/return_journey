const object1 = {
    brand: "Toyota",
    year: 2023,
    model: "X250"
}
const object2 = {
    brand: "Maruti Suzuki",
    year: 2021,
    model: "800"
}

function mergeObjectV1(object1,object2){

}

function mergeObjectV2(object1, object2){
    let result = object1
    for(let i of Object.keys(object2)){
        if(!result[i]){
            result[i] = object2[i];
        }else{
            result["_"+i] = object2[i];
        }
    }
    return result;
}


console.log(mergeObjectV2(object1,object2))