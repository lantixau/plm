// Authentication & Users
module.exports.authController = require('./auth.controller');
module.exports.userController = require('./user.controller');
module.exports.userRoleController = require('./user_role.controller');

// Characteristics
module.exports.plantController = require('./characteristics/plant.controller');
module.exports.currencyController = require('./characteristics/currency.controller');
module.exports.familyController = require('./characteristics/family.controller');
module.exports.subFamilyController = require('./characteristics/sub_family.controller');
module.exports.uomController = require('./characteristics/uom.controller');
module.exports.costTypeController = require('./characteristics/cost_type.controller');
module.exports.productTypeController = require('./characteristics/product_type.controller');
module.exports.storageConditionController = require('./characteristics/storage_condition.controller');
module.exports.precautionOfUseController = require('./characteristics/precaution_of_use.controller');
module.exports.nutrientController = require('./characteristics/nutrient.controller');
module.exports.nutrientMethodController = require('./characteristics/nutrient_method.controller');
module.exports.organolepticController = require('./characteristics/organoleptic.controller');
module.exports.physicochemicalController = require('./characteristics/physicochemical.controller');
module.exports.microbiologicalController = require('./characteristics/microbiological.controller');
module.exports.biologicalOriginController = require('./characteristics/biological_origin.controller');
module.exports.areaController = require('./characteristics/area.controller');
module.exports.generalSettingController = require('./general_setting.controller');

// Raw Materials
module.exports.rawMaterialController = require('./raw_material/raw_material.controller');
module.exports.rawMaterialCostController = require('./raw_material/raw_material_cost.controller');
module.exports.rawMaterialPurchasePriceController = require('./raw_material/raw_material_purchase_price.controller');
module.exports.rawMaterialNutrientController = require('./raw_material/raw_material_nutrient.controller');
module.exports.rawMaterialIngredientController = require('./raw_material/raw_material_ingredient.controller');
module.exports.rawMaterialMicrobiologicalController = require('./raw_material/raw_material_microbiological.controller');
module.exports.rawMaterialOrganolepticController = require('./raw_material/raw_material_organoleptic.controller');
module.exports.rawMaterialPhysicochemicalController = require('./raw_material/raw_material_physicochemical.controller');

// Finished Product
module.exports.finishedProductController = require('./finished_product/finished_product.controller');
module.exports.finishedProductCompositionController = require('./finished_product/composition.controller');
module.exports.finishedProductCostController = require('./finished_product/cost.controller');
module.exports.finishedProductNutrientController = require('./finished_product/nutrient.controller');
module.exports.finishedProductOrganolepticController = require('./finished_product/organoleptic.controller');
module.exports.finishedProductPhysicochemicalController = require('./finished_product/physicochemical.controller');
module.exports.finishedProductLabelController = require('./finished_product/label.controller');
module.exports.finishedProductRetailersInformationController = require('./finished_product/retailers_information.controller');

// Stage Gate
module.exports.stageController = require('./stage_gate/stage.controller');
module.exports.statusStepController = require('./stage_gate/status_step.controller');
module.exports.taskController = require('./stage_gate/task.controller');
