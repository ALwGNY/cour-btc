#!/usr/bin/env node
const axios = require("axios");

async function main() {
  const currency = process.argv[2] ? process.argv[2].toUpperCase() : "EUR";

  try {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const { data } = await axios.get(url);

    if (!data.bpi[currency]) {
      throw new Error("Devise inconnue");
    }

    const currentDate = data.time.updated;
    const rate = data.bpi[currency].rate;
    console.log(`> BTC = ${rate} ${currency} (${currentDate})`);
  } catch (err) {
    console.log(err.toString());
  }
}

main();
