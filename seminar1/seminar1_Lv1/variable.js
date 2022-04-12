//var 재선언O, 재할당O
var variable1="var variable";
var variable1="new var variable";
console.log(variable1);

//let 재선언X, 재할당O
let variable2="let variable";
//let variable2="new let variable"; 오류
variable2="hi let variable";
console.log(variable2);

// const 재선언X, 재할당X
const variable3="const variable";
//const variable3="new const variable"; 오류
//variable3="hi const variable"; 오류
console.log(variable3);
