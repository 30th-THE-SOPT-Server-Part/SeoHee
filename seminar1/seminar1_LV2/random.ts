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
    shuffle(members:Member[]) {
        members.sort(() => Math.random() - 0.5);
        return members;
    },
    organize(members:Member[]) {
        const dinnerMember:string[]=new Array();

        this.shuffle(members);

        const yb: Member | undefined = members.find((element) => element.group==='yb');
        const ob: Member | undefined = members.find((element) => element.group==='ob');
        
        if (yb && ob){
            dinnerMember.push(yb.name);
            dinnerMember.push(ob.name);
        }

        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}(YB),${dinnerMember[1]}(OB)`);
    }
};

dinner.organize(dinner.member);