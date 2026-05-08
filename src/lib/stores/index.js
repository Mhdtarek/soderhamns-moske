import { browser } from "$app/environment";
import { writable } from "svelte/store";

/** false döljer "Större text" i inställningar och ignorerar gammalt i localStorage */
export const SHOW_LARGER_TEXT_SETTING = false;

export let size = writable("large");
export let isLarger = writable(false);
export let textSize = writable(160);

function readStoredTheme() {
  if (!browser) return "light";
  return localStorage.getItem("appTheme") === "dark" ? "dark" : "light";
}

/** @type {import('svelte/store').Writable<'light' | 'dark'>} */
export const appTheme = writable(readStoredTheme());

if (browser) {
  appTheme.subscribe((t) => {
    localStorage.setItem("appTheme", t);
  });
}
