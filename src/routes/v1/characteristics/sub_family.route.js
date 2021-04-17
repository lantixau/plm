const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const subFamilyValidation = require('../../../validations/characteristics/sub_family.validation');
const subFamilyController = require('../../../controllers/characteristics/sub_family.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageSubFamilies'), validate(subFamilyValidation.createSubFamily), subFamilyController.createSubFamily)
  .get(auth('getSubFamilies'), validate(subFamilyValidation.getSubFamiles), subFamilyController.getSubFamilies);

router
  .route('/:subFamilyId')
  .get(auth('getSubFamilies'), validate(subFamilyValidation.getSubFamily), subFamilyController.getSubFamily)
  .patch(auth('manageSubFamilies'), validate(subFamilyValidation.updateSubFamily), subFamilyController.updateSubFamily)
  .delete(auth('manageSubFamilies'), validate(subFamilyValidation.deleteSubFamily), subFamilyController.deleteSubFamily);

module.exports = router;