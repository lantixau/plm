// Authentication & Users
module.exports.authValidation = require('./auth.validation');
module.exports.userValidation = require('./user.validation');
module.exports.userRoleValidation = require('./user_role.validation');

// Characteristics
module.exports.currencyValidation = require('./characteristics/currency.validation');
module.exports.plantValidation = require('./characteristics/plant.validation');
module.exports.familyValidation = require('./characteristics/family.validation');
module.exports.subFamilyValidation = require('./characteristics/sub_family.validation');
module.exports.productStateValidation = require('./characteristics/product_state.validation');
module.exports.uomValidation = require('./characteristics/uom.validation');
module.exports.costTypeValidation = require('./characteristics/cost_type.validation');
module.exports.productTypeValidation = require('./characteristics/product_type.validation');
module.exports.storageConditionValidation = require('./characteristics/storage_condition.validation');
module.exports.precautionOfUseValidation = require('./characteristics/precaution_of_use.validation');
module.exports.nutrientValidation = require('./characteristics/nutrient.validation');
module.exports.nutrientMethodValidation = require('./characteristics/nutrient_method.validation');
module.exports.organolepticValidation = require('./characteristics/organoleptic.validation');
module.exports.physicochemicalValidation = require('./characteristics/physicochemical.validation');
module.exports.microbiologicalValidation = require('./characteristics/microbiological.validation');
module.exports.biologicalOriginValidation = require('./characteristics/biological_origin.validation');
module.exports.areaValidation = require('./characteristics/area.validation');
module.exports.generalSettingValidation = require('./general_setting.validation');

// Raw Materials
module.exports.rawMaterialValidation = require('./raw_material/raw_material.validation');
module.exports.rawMaterialPhysicochemicalValidation = require('./raw_material/raw_material_physicochemical.validation');
module.exports.rawMaterialPurchasePriceValidation = require('./raw_material/raw_material_purchase_price.validation');
module.exports.rawMaterialNutrientValidation = require('./raw_material/raw_material_nutrient.validation');
module.exports.rawMaterialOrganolepticValidation = require('./raw_material/raw_material_organoleptic.validation');
module.exports.rawMaterialCostValidation = require('./raw_material/raw_material_cost.validation');
module.exports.rawMaterialIngredientValidation = require('./raw_material/raw_material_ingredient.validation');
module.exports.rawMaterialMicrobiologicalValidation = require('./raw_material/raw_material_microbiological.validation');

// Finished Product Validation
module.exports.finishedProductValidation = require('./finished_product/finished_product.validation');
module.exports.finishedProductCompositionValidation = require('./finished_product/composition.validation');
module.exports.finishedProductCostValidation = require('./finished_product/cost.validation');
module.exports.finishedProductNutrientValidation = require('./finished_product/nutrient.validation');
module.exports.finishedProductOrganolepticValidation = require('./finished_product/organoleptic.validation');
module.exports.finishedProductPhysicochemicalValidation = require('./finished_product/physicochemical.validation');
module.exports.finishedProductLabelValidation = require('./finished_product/label.validation');
module.exports.finishedProductRetailersInformationValidation = require('./finished_product/retailers_information.validation');

// Stage Gate
module.exports.statusStepValidation = require('./stage_gate/status_step.validation');
module.exports.stageValidation = require('./stage_gate/stage.validation');
module.exports.taskValidation = require('./stage_gate/task.validation');
