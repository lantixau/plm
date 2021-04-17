const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const familyValidation = require('../../../validations/characteristics/family.validation');
const familyController = require('../../../controllers/characteristics/family.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageFamilies'), validate(familyValidation.createFamily), familyController.createFamily)
  .get(auth('getFamilies'), validate(familyValidation.getFamiles), familyController.getFamilies);

router
  .route('/:familyId')
  .get(auth('getFamilies'), validate(familyValidation.getFamily), familyController.getFamily)
  .patch(auth('manageFamilies'), validate(familyValidation.updateFamily), familyController.updateFamily)
  .delete(auth('manageFamilies'), validate(familyValidation.deleteFamily), familyController.deleteFamily);

module.exports = router;