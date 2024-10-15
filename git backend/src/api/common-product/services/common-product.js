'use strict';

/**
 * common-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::common-product.common-product');
