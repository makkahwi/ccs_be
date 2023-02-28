"use strict";
const list = require("../database/seeds/list.json");
const countries = require("../database/seeds/countries.json");
const currencies = require("../database/seeds/currencies.json");
const editions = require("../database/seeds/editions.json");
const codes = require("../database/seeds/codes.json");

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
  //     await strapi.db.query("api::currency-zone.currency-zone").create({
  //       data: {
  //         name,
  //         fullName,
  //         continent,
  //         mapCode:
  //           codes.find((code) => code.name === name)?.alpha2.toLowerCase() ||
  //           "noCode",
  //       },
  //     });
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 750);
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
  //         currency_zone: countries.find((c) => c.name === name)?.id,
  //       },
  //     });
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 750);
  // For CurrencyEdition Creation
  // let i = 0;
  // let timer = setInterval(async () => {
  //   if (i < list.length) {
  //     console.log(i);
  //     const { mostRecentEdition, year, currencyName } = list[i++];
  //     await strapi.db.query("api::currency-edition.currency-edition").create({
  //       data: {
  //         order: mostRecentEdition || 100,
  //         year: year || 2030,
  //         currency: currencies.find((c) => c.name === currencyName)?.id,
  //       },
  //     });
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 750);
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
  //         type: key.includes("Coin") ? "Coin" : "Banknote",
  //         currency_edition: editions.find(
  //           (edition) => edition.currency.code === current.code
  //         )?.id,
  //         collected: key.includes("collected"),
  //       }))
  //       .sort((a, b) => a.value - b.value),
  //   ],
  //   []
  // );
  // let i = 0;
  // let timer = setInterval(async () => {
  //   if (i < final.length) {
  //     console.log(i);
  //     await strapi.entityService.create("api::piece.piece", {
  //       data: final[i++],
  //     });
  //     // console.log({ res });
  //     // if (final[i].collected) {
  //     //   await strapi.db.query("api::collection.collection").create({
  //     //     data: {
  //     //       ...final[i],
  //     //       date: final[i].date || "2030-01-30",
  //     //       count: 1,
  //     //       piece: res.id,
  //     //     },
  //     //   });
  //     //   i += 1;
  //     // } else {
  //     //   i += 1;
  //     // }
  //   } else {
  //     clearInterval(timer);
  //   }
  // }, 750);
  // },
};
