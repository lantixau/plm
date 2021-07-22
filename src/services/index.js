// Authentication & Users
module.exports.authService = require('./auth.service');
module.exports.emailService = require('./email.service');
module.exports.tokenService = require('./token.service');
module.exports.userService = require('./user.service');
module.exports.userRoleService = require('./user_role.service');

// Characteristics
module.exports.currencyService = require('./characteristics/currency.service');
module.exports.plantService = require('./characteristics/plant.service');
module.exports.familyService = require('./characteristics/family.service');
module.exports.subFamilyService = require('./characteristics/sub_family.service');
module.exports.productStateService = require('./characteristics/product_state.service');
module.exports.uomService = require('./characteristics/uom.service');
module.exports.costTypeService = require('./characteristics/cost_type.service');
module.exports.productTypeService = require('./characteristics/product_type.service');
module.exports.storageConditionService = require('./characteristics/storage_condition.service');
module.exports.precautionOfUseService = require('./characteristics/precaution_of_use.service');
module.exports.nutrientService = require('./characteristics/nutrient.service');
module.exports.nutrientMethodService = require('./characteristics/nutrient_method.service');
module.exports.organolepticService = require('./characteristics/organoleptic.service');
module.exports.physicochemicalService = require('./characteristics/physicochemical.service');
module.exports.microbiologicalService = require('./characteristics/microbiological.service');
module.exports.biologicalOriginService = require('./characteristics/biological_origin.service');
module.exports.areaService = require('./characteristics/area.service');
module.exports.generalSettingService = require('./general_settings.service');

// Raw Materials
module.exports.rawMaterialService = require('./raw_material/raw_material.service');
module.exports.rawMaterialCostService = require('./raw_material/raw_material_cost.service');
module.exports.rawMaterialPurchasePriceService = require('./raw_material/raw_material_purchase_price.service');
module.exports.rawMaterialNutrientService = require('./raw_material/raw_material_nutrient.service');
module.exports.rawMaterialOrganolepticService = require('./raw_material/raw_material_organoleptic.service');
module.exports.rawMaterialIngredientService = require('./raw_material/raw_material_ingredient.service');
module.exports.rawMaterialMicrobiologicalService = require('./raw_material/raw_material_microbiological.service');
module.exports.rawMaterialPhysicochemicalService = require('./raw_material/raw_material_physicochemical.service');

// Finished Product
module.exports.finishedProductService = require('./finished_product/finished_product.service');
module.exports.finishedProductCompositionService = require('./finished_product/composition.service');
module.exports.finishedProductCostService = require('./finished_product/cost.service');
module.exports.finishedProductNutrientService = require('./finished_product/nutrient.service');
module.exports.finishedProductOrganolepticService = require('./finished_product/organoleptic.service');
module.exports.finishedProductPhysicochemicalService = require('./finished_product/physicochemical.service');
module.exports.finishedProductLabelService = require('./finished_product/label.service');
module.exports.finishedProductRetailersInformationService = require('./finished_product/retailers_information.service');

// Stage Gate
module.exports.stageService = require('./stage_gate/stage.service');
module.exports.statusStepService = require('./stage_gate/status_step.service');
module.exports.taskService = require('./stage_gate/task.service');
