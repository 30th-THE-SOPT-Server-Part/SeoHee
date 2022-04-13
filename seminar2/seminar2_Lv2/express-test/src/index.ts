import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! My name is Seohee!');
});

app.listen('8050', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8050 🛡️
        #############################################
    `);
});