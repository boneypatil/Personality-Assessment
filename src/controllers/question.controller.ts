import { AppController } from './app.controller';
import { IQuestion, Question } from '../models/question';

export class QuestionController extends AppController<IQuestion> {
  getModelType() { return Question; }
}