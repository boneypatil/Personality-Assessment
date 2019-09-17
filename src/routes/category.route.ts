import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';

export default () => {
  const router = Router();
  const categoryController = new CategoryController();

  router.route('/')
    .get((req, res, next) => categoryController.list(req, res, next));

  router.route('/questions')
    .get((req, res, next) => categoryController.categoriesQuestions(req, res, next));

  router.route('/question/populate')
    .get((req, res, next) => categoryController.populatedb(req, res, next));

  return router;
};
