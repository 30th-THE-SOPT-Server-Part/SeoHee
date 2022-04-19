//함수 선언식
//function menu(dinner){
//    return `오늘 메뉴는 ${dinner} 입니다.`;
//}

//const str2 = menu('삼겹살');
//console.log(str2);

//함수 표현식 (더 많이 사용)
const menu=(dinner)=>{
    return `오늘 메뉴는 ${dinner} 입니다.`;
}
    
const str2 = menu('곱창');
console.log(str2);


const func = (num)=>{
    return num*num;
}
const multiple = (func, num)=>{
    console.log(func(num));
}

multiple(func,3);

