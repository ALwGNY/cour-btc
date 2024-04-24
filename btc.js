#!/usr/bin/env node
const axios = require("axios");

async function main() {
  try {
    let currency = "EUR"
    if (process.argv[2]) {
        currency = process.argv[2].toUpperCase()
    }
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    if (!response.data.bpi[currency]) {
      throw new Error("Devise inconnue");
    }

    const currentDate = response.data.time.updated;
    const rate = response.data.bpi[currency].rate;
    console.log(`> BTC = ${rate} ${currency} (${currentDate})`);
  } catch (err) {
    console.log(err.toString());
  }
}

main();

