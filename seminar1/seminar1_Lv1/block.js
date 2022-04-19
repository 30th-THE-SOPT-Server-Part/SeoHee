if(true){
    var x = 'var'; //function scope
}
console.log(`var: ${x}`);

if(true){
    let y='let'; //block scope
}
//console.log(`let: ${y}`); 오류 let, const는 block밖에서 접근X

function foo(){
    if(true){
        var variable='hello';
        console.log('if-block-',variable);
    }
    console.log('function block-',variable);
}
// console.log('global-',variable); 오류 해당 function 밖
