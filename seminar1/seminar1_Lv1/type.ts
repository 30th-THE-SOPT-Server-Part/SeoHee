let isDone: boolean = true;
const str: string = 'hello';
let num: number=2;
// 오류 const sum: number = 'sum number';

let name1: string='장서희';
console.log(name1);

let grade: number = 4;

//array
//const ages: number[]=[1,2,3,4,5];
const ages: Array<number>=[1,2,3,4];
//const strArray: string[]=['hi','hello'];
const strArray: Array<string>=['hi','hello'];

//Object(모든 타입) vs object(원시타입 제외)
const f1 = (obj: object): void =>{
    console.log(obj);
}
const f2 = (obj: Object):void =>{
    console.log(obj);
}

//f2는 둘 다 가능
f1([1,2,3,4]);
//f1('jjj'); 오류

//반환타입 
const div=(x:number,y:number):number=>{
    return x/y;
}

//null, undefined 이름 그대로가 타입
let p: null = null;
let u: undefined = undefined;

//타입 단언-angle-bracket 
let name3: any='장서희'; //any 마법(아무 타입이나 가능)
let name3Length: number=(<string>name3).length;

//타입 단언-as
let name4: any='서버';
let name4Length: number = (name4 as string).length;

//any (꼭 필요할 때만 쓰기)
const unknown: any={
    name: '장서희',
    age: 18,
    organization: 'SOPT',
    completion: [28,29]
}