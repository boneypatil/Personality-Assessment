import mongoose, { Model } from 'mongoose';
import { IAppModel } from './model';

export interface IQuestion extends IAppModel {
  question: string;
  category: string;
  question_type: {
    type: string;
    options: string[];
  };
}

/**
 * Question Schema
 */
const questionSchema = new mongoose.Schema({
  question: String,
  category: String,
  question_type: {
    type: { type: String },
    options: Array
  }
});

/**
 * @typedef Question
 */
// tslint:disable-next-line:variable-name
export const Question: Model<IQuestion> = mongoose.model<IQuestion>('Question', questionSchema);