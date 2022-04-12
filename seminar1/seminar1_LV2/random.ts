// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

interface Member{
    name: string,
    group: string
}

interface Dinner{
    member: Member[],
    shuffle(array:Member[]):Member[],
    organize(array:Member[]):void
}

const dinner: Dinner= {
    
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김동재',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],
    shuffle(array:Member[]) {
        array.sort(() => Math.random() - 0.5);
        console.log(array);
        return array;
    },
    organize(array:Member[]) {
        const dinnerMember=new Array();

        this.shuffle(array);

        dinnerMember[0]=array.find((element)=>element.group==='yb');
        dinnerMember[1]=array.find((element)=>element.group==='ob');

        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0].name}(YB),${dinnerMember[1].name}(OB)`);
    
    }
};

dinner.organize(dinner.member);