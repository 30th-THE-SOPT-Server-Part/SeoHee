//증감연산
let a=2;
let b = a++; // b=2
//let b = ++a; //b=3
console.log(b);

//사칙연산
let c=2+3;
let d=3-2;
let e=2*3;
let f=3/2;

//동치연산 ===:값과 타입(추천), ==:값
let g=2+3;
let x=5;

if(g===x){
    console.log('g===x');
}

let y='5';
if(g==y){
    console.log('a==y');
}

if(d!=x){ //값만
    console.log('d!=x');
}

if(g!==y){ //값과 타입비교
    console.log('g!==y');
}

//나머지
if(b%d==0){
    console.log(b%d);
}

//and or
if(c===5 && d===1){
    console.log('hi');
}

if(c===4 || d===1){
    console.log('hello');
}

console.log(typeof a);

if (typeof a=='number'){
    console.log(a);
}