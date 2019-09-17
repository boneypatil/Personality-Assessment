import mongoose, { Model } from 'mongoose';
import { IAppModel } from './model';

export interface ICategory extends IAppModel {
  _id: string;
  name: string;
}

/**
 * Category Schema
 */
const categorySchema = new mongoose.Schema({
  _id: String,
  name: String
});

/**
 * @typedef Category
 */
// tslint:disable-next-line:variable-name
export const Category: Model<ICategory> = mongoose.model<ICategory>('Category', categorySchema);