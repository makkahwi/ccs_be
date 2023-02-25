"use strict";
const list = require("../database/seeds/currenciesList.json");
const editions = require("../database/seeds/editions.json");

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
  async bootstrap({ strapi }) {
    // const final = list.reduce(
    //   (final, current) => [
    //     ...final,
    //     ...Object.keys(current)
    //       ?.filter(
    //         (key) => key.includes("collected") || key.includes("toCollect")
    //       )
    //       .map((key) => ({
    //         value: current[key],
    //         type: "Banknote",
    //         currency_edition: editions.find(
    //           (edition) => edition.currency.code === current.code
    //         )?.id,
    //       }))
    //       .sort((a, b) => a.value - b.value),
    //   ],
    //   []
    // );
    // let i = 0;
    // let timer = setInterval(async () => {
    //   if (i < final.length) {
    //     console.log(i);
    //     await strapi.db.query("api::piece.piece").create({
    //       data: final[i++],
    //     });
    //   } else {
    //     clearInterval(timer);
    //   }
    // }, 1500);
    // await strapi.db.query("api::piece.piece").create({
    //   data: list.map((ele) => ({
    //     ...ele,
    //   })),
    // });
  },
};
