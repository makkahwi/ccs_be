'use strict';

/**
 * exchange-rate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exchange-rate.exchange-rate');
