import { generateOptions } from "./utils.js";
import currencies from "./currencies.js";
import { handleInput } from "./handlers.js";

// eslint-disable-next-line quotes
const fromSelect = document.querySelector('[name="from_currency"]');
// eslint-disable-next-line quotes
const fromInput = document.querySelector('[name="from_amount"]');
// eslint-disable-next-line quotes
const toSelect = document.querySelector('[name="to_currency"]');
// eslint-disable-next-line quotes
const toEl = document.querySelector(".to_amount");
const form = document.querySelector(".app form");
const endpoint = "https://api.exchangeratesapi.io/latest";

const ratesByBase = {};

const optionsHTML = generateOptions(currencies);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener("input", handleInput);
