import { Router } from 'express';
import { QuestionController } from '../controllers/question.controller';

export default () => {
  const router = Router();
  const questionController = new QuestionController();

  router.route('/')
    .get((req, res, next) => questionController.list(req, res, next));

  return router;
};
