var globalVar = "I am a global variable with scope var";
let globalLet = "I am also a global variable, but with scope let";
const globalConst = "I am global const";

{
    var blockVar = "I am a block scoped var";
    let blockLet = "I am a block scoped let";
    const blockConst = "I am a block scoped const";
}

function show(){
    var functionedVar = "I am function scoped var";
    let functionLet = "I am function scoped let";
    const functionConst = "I am function scoped const";
}



console.log(globalVar);
console.log(globalLet);
console.log(globalConst);