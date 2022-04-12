interface ServerPart{
    name: string;
    age: number;
    group: string;
    mbti: string[]; //or Array<number>
}

const serverPart: ServerPart={
    name:'seohee',
    age:23,
    group: 'YB',
    mbti: ['infp']
}

console.log(serverPart);

//선택적 프로퍼티
interface Closet{
    name: string;
    shirt: number;
    pants: number;
    sunglass?: number;
    hat?: number;
}
const ohmygirl: Array<Closet>=[
{
    name: '효정',
    shirt: 5,
    pants:2,

},
{
    name:'아린',
    shirt:2,
    pants:8,
    hat:2//선택적
}
]

console.log(ohmygirl);