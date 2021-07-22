const express = require('express');
const config = require('../../config/config');

// Authentication, Users & General
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const userRoleRoute = require('./user_role.route');
const docsRoute = require('./docs.route');

// Characteristics
const plantRoute = require('./characteristics/plant.route');
const currencyRoute = require('./characteristics/currency.route');
const familyRoute = require('./characteristics/family.route');
const subFamilyRoute = require('./characteristics/sub_family.route');
const productStateRoute = require('./characteristics/product_state.route');
const productTypeRoute = require('./characteristics/product_type.route');
const storageConditionRoute = require('./characteristics/storage_condition.route');
const precautionOfUseRoute = require('./characteristics/precaution_of_use.route');
const uomRoute = require('./characteristics/uom.route');
const nutrientRoute = require('./characteristics/nutrient.route');
const nutrientMethodRoute = require('./characteristics/nutrient_method.route');
const costTypeRoute = require('./characteristics/cost_type.route');
const organolepticRoute = require('./characteristics/organoleptic.route');
const physicochemicalRoute = require('./characteristics/physicochemical.route');
const microbiologicalRoute = require('./characteristics/microbiological.route');
const biologicalOriginRoute = require('./characteristics/biological_origin.route');
const areaRoute = require('./characteristics/area.route');
const generalSettingRoute = require('./general_setting.route');

// Raw Materials
const rawMaterialRoute = require('./raw_material/raw_material.route');
const rawMaterialCostRoute = require('./raw_material/raw_material_cost.route');
const rawMaterialPurchasePriceRoute = require('./raw_material/raw_material_purchase_price.route');
const rawMaterialNutrientRoute = require('./raw_material/raw_material_nutrient.route');
const rawMaterialOrganolepticRoute = require('./raw_material/raw_material_organoleptic.route');
const rawMaterialPhysicochemicalRoute = require('./raw_material/raw_material_physicochemical.route');
const rawMaterialMicrobiologicalRoute = require('./raw_material/raw_material_microbiological.route');
const rawMaterialIngredientRoute = require('./raw_material/raw_material_ingredient.route');

// Finished Product
const finishedProductRoute = require('./finished_product/finished_product.route');
const finishedProductCompositionRoute = require('./finished_product/composition.route');
const finishedProductCostRoute = require('./finished_product/cost.route');
const finishedProductNutrientRoute = require('./finished_product/nutrient.route');
const finishedProductOrganolepticRoute = require('./finished_product/organoleptic.route');
const finishedProductPhysicochemicalRoute = require('./finished_product/physicochemical.route');
const finishedProductLabelRoute = require('./finished_product/label.route');
const finishedProductRetailersInformationRoute = require('./finished_product/retailers_information.route');

// Stage Gates
const stageRoute = require('./stage_gate/stage.route');
const statusStepsRoute = require('./stage_gate/status_steps.route');
const tasksRoute = require('./stage_gate/task.route');

const router = express.Router();

const GeneralRoutes = [];
const RawMaterialRoutes = [];
const FinishedProductRoutes = [];
const CharacteristicsRoutes = [];

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/user-roles',
    route: userRoleRoute,
  },
  {
    path: '/families',
    route: familyRoute,
  },
  {
    path: '/sub-families',
    route: subFamilyRoute,
  },
  {
    path: '/product-states',
    route: productStateRoute,
  },
  {
    path: '/product-types',
    route: productTypeRoute,
  },
  {
    path: '/storage-conditions',
    route: storageConditionRoute,
  },
  {
    path: '/precaution-of-use',
    route: precautionOfUseRoute,
  },
  {
    path: '/uoms',
    route: uomRoute,
  },
  {
    path: '/raw-materials/physicochemical',
    route: rawMaterialPhysicochemicalRoute,
  },
  {
    path: '/raw-materials/ingredients',
    route: rawMaterialIngredientRoute,
  },
  {
    path: '/raw-materials/microbiological',
    route: rawMaterialMicrobiologicalRoute,
  },
  {
    path: '/raw-materials/purchase-prices',
    route: rawMaterialPurchasePriceRoute,
  },
  {
    path: '/raw-materials/organoleptic',
    route: rawMaterialOrganolepticRoute,
  },
  {
    path: '/raw-materials/costs',
    route: rawMaterialCostRoute,
  },
  {
    path: '/raw-materials/nutrients',
    route: rawMaterialNutrientRoute,
  },
  {
    path: '/raw-materials',
    route: rawMaterialRoute,
  },
  {
    path: '/cost-types',
    route: costTypeRoute,
  },
  {
    path: '/nutrients',
    route: nutrientRoute,
  },
  {
    path: '/nutrient-methods',
    route: nutrientMethodRoute,
  },
  {
    path: '/organoleptics',
    route: organolepticRoute,
  },
  {
    path: '/physicochemicals',
    route: physicochemicalRoute,
  },
  {
    path: '/microbiologicals',
    route: microbiologicalRoute,
  },
  {
    path: '/biological-origin',
    route: biologicalOriginRoute,
  },
  {
    path: '/area',
    route: areaRoute,
  },
  {
    path: '/currency',
    route: currencyRoute,
  },
  {
    path: '/general-settings',
    route: generalSettingRoute,
  },
  {
    path: '/finished-product/compositions',
    route: finishedProductCompositionRoute,
  },
  {
    path: '/finished-product/labels',
    route: finishedProductLabelRoute,
  },
  {
    path: '/finished-product/retailers-information',
    route: finishedProductRetailersInformationRoute,
  },
  {
    path: '/finished-product/costs',
    route: finishedProductCostRoute,
  },
  {
    path: '/finished-product/nutrients',
    route: finishedProductNutrientRoute,
  },
  {
    path: '/finished-product/organoleptics',
    route: finishedProductOrganolepticRoute,
  },
  {
    path: '/finished-product/physicochemicals',
    route: finishedProductPhysicochemicalRoute,
  },
  {
    path: '/finished-product',
    route: finishedProductRoute,
  },
  {
    path: '/stages',
    route: stageRoute,
  },
  {
    path: '/status-steps',
    route: statusStepsRoute,
  },
  {
    path: '/tasks',
    route: tasksRoute,
  },
  {
    path: '/plants',
    route: plantRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
