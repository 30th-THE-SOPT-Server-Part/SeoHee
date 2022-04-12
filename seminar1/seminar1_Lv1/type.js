// number, string
const name='장서희';
console.log(typeof name);

let age=18;
console.log(typeof age);

let server=true;
console.log(typeof server);

//안녕하세요 제 이름은 장서희 입니다. 제 나이는 18살 입니다.
console.log('안녕하세요 제 이름은 '+name+'입니다. 제 나이는' + age+'살 입니다,');
console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다.`);

//null vs undefined
console.log(typeof null); //object = 자바스크립트의 버그
console.log(typeof undefined); //undefined

//array,  array.map
let arr=['안녕',1,'나는',3,true,5];

let num=[1,2,3,4];
const newNumArr=num.map(x=>x*2);
console.log(newNumArr);

newNumArr.map(x=>{
    console.log(x);
});

for(const x of newNumArr){
    console.log(x);
}
