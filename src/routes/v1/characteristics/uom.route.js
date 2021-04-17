const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const validation = require('../../../validations/characteristics/uom.validation');
const controller = require('../../../controllers/characteristics/uom.controller');

const router = express.Router();

const singularName = 'UOM';
const pluralName = 'UOMs';

const permissions = [
  'create'+singularName.replace(/\s/g, ''),
  'query'+pluralName.replace(/\s/g, ''),
  'get'+singularName.replace(/\s/g, ''),
  'patch'+singularName.replace(/\s/g, ''),
  'delete'+singularName.replace(/\s/g, '')
];

router
  .route('/')
  .post(auth(permissions[0]), validate(validation.create), controller.create)
  .get(auth(permissions[1]), validate(validation.query), controller.query);

router
  .route('/:uomId')
  .get(auth(permissions[2]), validate(validation.getById), controller.getById)
  .patch(auth(permissions[3]), validate(validation.updateById), controller.updateById)
  .delete(auth(permissions[4]), validate(validation.deleteById), controller.deleteById);

module.exports = router;