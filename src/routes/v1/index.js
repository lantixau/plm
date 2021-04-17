const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const familyRoute = require('./characteristics/family.route');
const subFamilyRoute = require('./characteristics/sub_family.route');
const productStateRoute = require('./characteristics/product_state.route');
const productTypeRoute = require('./characteristics/product_type.route');
const storageConditionRoute = require('./characteristics/storage_condition.route');
const precautionOfUseRoute = require('./characteristics/precaution_of_use.route');
const uomRoute = require('./characteristics/uom.route');
const rawMaterialRoute = require('./raw_material/raw_material.route');
const config = require('../../config/config');

const router = express.Router();

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
    path: '/raw-materials',
    route: rawMaterialRoute,
  }
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
