/*
// Embedded 방식
{
    _id: ObjectId,
    username: "채정아",
    school: {
        name: "숙명여자대학교",
        major: "소프트웨어융합"
    },
    contact: {
        email: "hello@email.com",
        phone: "010-1234-5678"
    }
}

// References 방식
// user document
{
    _id: ObjectId1,
    username: "채정아"
}
// contact document
{
    -id: ObjectId2,
    userId: ObjectId1,
    email: "hello@email.com",
    phone: "010-1234-5678"
}
// school document
{
    _id: ObjectId3,
    userId: OnjectId1,
    name: "숙명여자대학교",
    major: "소프트웨어융합"
}
*/

/*
// 1:1: 대부분 Sub document로 embedded 방식 사용
//1:N - 1이 N 참조(자식참조 방식)
//Movie document
{
    _id: 1,
    title: "서버파트",
    director: "채정아",
    year: "2022",
    reviews: [1,2]
}
//Review document
{
    _id: 1,
    comment: "good",
}
{
    _id: 2,
    comment: "bad",
}

//1:N - N이 1을 참조 (부모참조 방식)
//Movie document
{
    _id: 1,
    title: "서버파트",
    director: "채정아",
    year: "2022"
}
//Review document
{
    _id: 1,
    comment: "good",
    movieId: 1
}
{
    _id: 2,
    comment: "bad",
    movieId: 1
}

//M:N - 상호참조
// Class document
{
    _id:1,
    name: "서버학개론",
    prof: "채정아",
    students: [1,2,3]
}
{
    _id:2,
    name: "1차행사개론",
    prof: "장서현",
    students: [2,3]
}

//Student document
{
    _id: 1,
    name: "김민욱",
    class: [1]
},
{
    _id: 2,
    name: "최승빈",
    class: [1, 2]
},
{
    _id: 3,
    name: "김소현",
    class: [1, 2]
}
*/

/*
//알아두면 좋은 Modeling Pattern
//예시(일반 참조)
{
    _id: 1,
    customerID: 1,
    order:{
        product: "TV",
        price: 200000
        ...
    }
}
{
    _id: 1,
    name: "박진형",
    age=20;
    gender: "M",
    email: "abc@email.com",
    ...
}
//Extended Reference (참조 하지 않고 Embed)
{
    _id: 1,
    customer: {
        _id: 1,
        name: "박진형",
        age=20;
        gender: "M",
        email: "abc@email.com",
        ...
    }
    order:{
        product: "TV",
        price: 200000
        ...
    }
}
//subset: 두리번 예시, 더보기 누르기 전 미리 데이터 embed
//- update시 양쪽 모두 수정
*/