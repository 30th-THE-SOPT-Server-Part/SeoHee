//router index file
import { Router } from 'express';
import UserRouter from "./UserRouter";

const router: Router = Router();

//method 상관 없이 endpoint로 들어오는 모든 요청 UserRouter로 분기
router.use('/user', UserRouter);


export default router;