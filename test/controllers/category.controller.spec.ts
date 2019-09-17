import { CategoryController } from '../../src/controllers/category.controller';
import 'mocha';
import { Category } from '../../src/models/category';
const chai = require('chai');
chai.use(require('sinon-chai'));
const expect = chai.expect;

describe('Category controller', () => {

  describe('getModelType()', () => {
    it('it should return category model', (done) => {
      const categoryController = new CategoryController();
      expect(categoryController.getModelType()).to.equal(Category);
      done();
    });
  });
});