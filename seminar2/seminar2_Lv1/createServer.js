const http=require('http');

http.createServer((req, res)=>{
    //서버에 보내줄 것
    res.write('<h1> hello Server Part</h1>');
    res.end('<p> Server Love </p>');
}).listen(8080, ()=>{
    console.log('8080번에서 서버 대기 중!');
})