//object
const sopt={
    season: 30,
    group: ['YB','OB'],
    part: ['서버','기획','디자인','안드로이드','웹','ios'],
    president: '김규민',
    introduce: function(){
        this.part.map(name=>{
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
        });
    }
}

console.log(sopt.group);
sopt.introduce();

//array
let array=[1, true, '안녕'];
console.log(array);

let array2=[
    {
        name: '김소령',
        age: 5
    },
    {
        name: '박정무',
        age:15
    }
];

console.log(array2);
console.log(typeof array2); //object
