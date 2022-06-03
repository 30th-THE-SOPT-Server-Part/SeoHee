import { Router } from "express";
import { body } from "express-validator/check";
import MovieController from "../controllers/MovieController";


const router: Router = Router();

router.post('/', [
    body("title").notEmpty(),
    body("director").notEmpty(),
    body("startDate").notEmpty(),
    body("thumbnail").notEmpty(),
    body("story").isLength({ min: 20 })
], MovieController.createMovie);
router.put('/:movieId', MovieController.updateMovie);
router.get('/:movieId', MovieController.findMovieById);
router.delete('/:movieId', MovieController.deleteMovie);

export default router;