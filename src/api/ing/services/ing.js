'use strict';

/**
 * ing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ing.ing');
