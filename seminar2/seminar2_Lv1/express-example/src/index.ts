import express, { Request, Response, NextFunction } from 'express';

const app = express(); //express 객체 받아오기

app.use(express.json()); //express에서 request body를 json으로 받아오겠다

app.use('/api', require('./api'));
// localhost:8000/api -> api 폴더
// localhost:8000/api/user-> user.ts

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! My name is Seohee!');
}); //get->http method

app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
}); //8000번 포트에서 서버 실행