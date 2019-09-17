import { IAppModel } from '../models/model';
import { Request, Response } from 'express';
import { Model, Types } from 'mongoose';
import { ObjectId } from 'bson';

/**
 * @param {IAppModel} model The default model object
 * for the controller. Will be required to create
 * an instance of the controller
 */
export abstract class AppController<M extends IAppModel> {

  abstract getModelType(): Model<M>;

  /**
   * @param {Request} req The request object
   * @param {Response} res The response object
   */
  create(progress: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const modelType = this.getModelType();
      new modelType(progress)
        .save()
        .then(savedObject => {
          return resolve(savedObject);
        }).catch(err => {
          return reject(err);
        });

    });
  }

  modify(req: any, res: Response, next: (err?: any) => void): void {
    const obj = req.body;
    const modelType = this.getModelType();
    const objectId: any = { _id: ObjectId.createFromHexString(req.params.id) };
    new modelType(objectId)
      .update(obj)
      .then((savedObject: any) => {
        return res.status(200).json({ ok: true, id: req.params.id, updated: 1 });
      }).catch((err: any) => {
        return next(err);
      });

  }

  delete(req: any, res: Response, next: (err?: any) => void): void {
    const obj = { _id: req.params.id, ...req.body };
    const modelType = this.getModelType();
    new modelType(obj)
      .remove()
      .then(savedObject => {
        return res.status(200).json({ ok: true, deleted: 1 });
      }).catch(err => {
        return next(err);
      });
  }

  list(req: Request, res: Response, next: (err?: any) => void): void {
    const obj = req.body;
    const modelType = this.getModelType();
    modelType.find({}, { __v: 0 })
      .then(result => {
        return res.status(200).json(result);
      }).catch(err => {
        return next(err);
      });
  }

  query(req: Request, res: Response, next: (err?: any) => void): void {
    const q = { ...req.body };
    const modelType = this.getModelType();
    modelType.find(q, { __v: 0 })
      .then(result => {
        return res.status(200).json(result);
      }).catch(err => {
        return next(err);
      });
  }
}

export default AppController;