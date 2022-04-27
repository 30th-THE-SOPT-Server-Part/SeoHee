import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
let like_cnt: number=0;

router.get('/', (req: Request, res: Response) => {
    like_cnt++;
    return res.status(200).json({
        status: 200,
        message: `좋아요 성공 좋아요 수:${like_cnt} `
    });
});

module.exports = router;