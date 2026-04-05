import { w as writable } from "./index2.js";
let isLarger = writable(false);
let textSize = writable(160);
function readStoredTheme() {
  return "light";
}
const appTheme = writable(readStoredTheme());
export {
  appTheme as a,
  isLarger as i,
  textSize as t
};
