import { writable } from "svelte/store";

export let size = writable("large");
export let isLarger = writable(false);
export let textSize = writable(200);
