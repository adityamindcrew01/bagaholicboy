'use strict';

/**
 * jewellery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jewellery.jewellery');
