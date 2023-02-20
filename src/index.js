"use strict";
// const list = require("../database/seeds/countries.json");
// const codes = require("../database/seeds/countries.json");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

  bootstrap(/*{ strapi }*/) {},

  // For creating entries
  // async bootstrap({ strapi }) {
  //   await strapi.db.query("api::country.country").createMany({
  //     data: list.map((ele) => ({
  //       ...ele,
  //       mapCode: codes.find((c) => c.name === ele.name)?.code.toLowerCase(),
  //     })),
  //   });
  // },
};
