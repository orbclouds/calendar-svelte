import { writable } from "svelte/store";

const day = writable<Date>(new Date());

export default day;
