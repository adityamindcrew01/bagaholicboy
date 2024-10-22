'use strict';

/**
 * celebrity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::celebrity.celebrity');
