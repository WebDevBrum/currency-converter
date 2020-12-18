import { generateOptions } from "./utils.js";
import currencies from "./currencies.js";
import { handleInput } from "./handlers.js";
import { fromSelect, toSelect } from "./elements.js";
import { init } from "./init.js";

// start the app
// init();

// starts the app when moused over
const app = document.querySelector(".app");

app.addEventListener("mouseenter", init, { once: true });
