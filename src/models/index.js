// Authentication & Users
module.exports.Token = require('./token.model');
module.exports.User = require('./user.model');
module.exports.UserRole = require('./user_role.model');

// Characteristics
module.exports.Area = require('./characteristics/area.model');
module.exports.Plant = require('./characteristics/plant.model');
module.exports.Currency = require('./characteristics/currency.model');
module.exports.Family = require('./characteristics/family.model');
module.exports.SubFamily = require('./characteristics/sub_family.model');
module.exports.ProductState = require('./characteristics/product_state.model');
module.exports.UOM = require('./characteristics/uom.model');
module.exports.CostType = require('./characteristics/cost_type.model');
module.exports.ProductType = require('./characteristics/product_type.model');
module.exports.PrecautionOfUse = require('./characteristics/precaution_of_use.model');
module.exports.StorageCondition = require('./characteristics/storage_condition.model');
module.exports.Nutrient = require('./characteristics/nutrient.model');
module.exports.NutrientMethod = require('./characteristics/nutrient_method.model');
module.exports.Organoleptic = require('./characteristics/organoleptic.model');
module.exports.Physicochemical = require('./characteristics/physicochemical.model');
module.exports.Microbiological = require('./characteristics/microbiological.model');
module.exports.BiologicalOrigin = require('./characteristics/biological_origin.model');
module.exports.GeneralSetting = require('./general_setting');

// Raw Materials
module.exports.RawMaterial = require('./raw_material/raw_material.model');
module.exports.RawMaterialCost = require('./raw_material/raw_material_cost.model');
module.exports.RawMaterialPurchasePrice = require('./raw_material/raw_material_purchase_price.model');
module.exports.RawMaterialNutrient = require('./raw_material/raw_material_nutrient.model');
module.exports.RawMaterialOrganoleptic = require('./raw_material/raw_material_organoleptic.model');
module.exports.RawMaterialPhysicochemical = require('./raw_material/raw_material_physicochemical.model');
module.exports.RawMaterialMicrobiological = require('./raw_material/raw_material_microbiological.model');
module.exports.RawMaterialIngredient = require('./raw_material/raw_material_ingredient.model');

// Finished Product
module.exports.FinishedProduct = require('./finished_product/finished_product.model');
module.exports.FinishedProductComposition = require('./finished_product/composition.model');
module.exports.FinishedProductCost = require('./finished_product/cost.model');
module.exports.FinishedProductNutrient = require('./finished_product/nutrient.model');
module.exports.FinishedProductOrganoleptic = require('./finished_product/organoleptic.model');
module.exports.FinishedProductPhysicochemical = require('./finished_product/physicochemical.model');
module.exports.FinishedProductLabel = require('./finished_product/label.model');
module.exports.FinishedProductRetailersInformation = require('./finished_product/retailers_information.model');

// Stage Gate
module.exports.Stage = require('./stage_gate/stage.model');
module.exports.StatusStep = require('./stage_gate/status_step.model');
module.exports.Task = require('./stage_gate/task.model');
