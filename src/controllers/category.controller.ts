import { AppController } from './app.controller';
import { ICategory, Category } from '../models/category';
import { Question } from '../models/question';

// DB Seed
import { categories as categoryJSON } from '../json/categories.json';
import { questions as questionJSON } from '../json/questions.json';

export class CategoryController extends AppController<ICategory> {
  getModelType() { return Category; }

  async categoriesQuestions(req: any, res: any, next: (err?: any) => void) {
    try {
      const [categories, questions] = await Promise.all([
        Category.find({}, {__v: 0}),
        Question.find({}, {__v: 0})
      ]);
      return res.json({categories: categories.map((category: ICategory) => category._id), questions});
    } catch (err) {
      return next(err);
    }
  }

  async populatedb(req: any, res: any, next: (err?: any) => void) {
    try {
      await Promise.all([Category.remove({}), Question.remove({})]);
      const [c, q] = await Promise.all([Category.insertMany(categoryJSON()), Question.insertMany(questionJSON())]);
      return res.json({c, q});
    } catch (err) {
      return next(err);
    }
  }
}