"use strict";
// const list = require("../database/seeds/list.json");
// const countries = require("../database/seeds/countries.json");
// const currencies = require("../database/seeds/currencies.json");
// const editions = require("../database/seeds/editions.json");

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

  // async bootstrap({ strapi }) {
  // For Country Creation
  // let i = 0;
  // let timer = setInterval(async () => {
  //   if (i < list.length) {
  //     console.log(i);
  //     const { name, fullName, continent } = list[i++];
  //     await strapi.db.query("api::country.country").create({
  //       data: { name, fullName, continent },
  //     });
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 1500);
  // For Currency Creation
  // let i = 0;
  // let timer = setInterval(async () => {
  //   if (i < list.length) {
  //     console.log(i);
  //     const {
  //       currencyName,
  //       code,
  //       mostRecentEdition,
  //       fractionName,
  //       fraction,
  //       name,
  //     } = list[i++];
  //     await strapi.db.query("api::currency.currency").create({
  //       data: {
  //         name: currencyName,
  //         code,
  //         mostRecentEdition: mostRecentEdition || 100,
  //         fractionName,
  //         fraction,
  //         country: countries.find((c) => c.name === name)?.id,
  //       },
  //     });
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 1500);
  // For CurrencyEdition Creation
  // let i = 0;
  // let timer = setInterval(async () => {
  //   if (i < list.length) {
  //     console.log(i);
  //     const { mostRecentEdition, year, currencyName } = list[i++];
  //     await strapi.db.query("api::currency.currency").create({
  //       data: {
  //         order: mostRecentEdition || 100,
  //         year,
  //         currency: currencies.find((c) => c.name === currencyName)?.id,
  //       },
  //     });
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 1500);
  // For Pieces Creation
  // const final = list.reduce(
  //   (final, current) => [
  //     ...final,
  //     ...Object.keys(current)
  //       ?.filter(
  //         (key) => key.includes("collected") || key.includes("toCollect")
  //       )
  //       .map((key) => ({
  //         value: current[key],
  //         type: key.includes("Coins") ? "Coin" : "Banknote",
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
  // },
};
