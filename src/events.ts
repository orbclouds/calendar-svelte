import { writable } from "svelte/store";

type CalendarEvent = string;

export type Events = Record<string, CalendarEvent[]>;

const events = writable<Events>({}, (set) => {
  const persistedEvents = localStorage.getItem("events");
  if (!persistedEvents) {
    set({});
    return;
  }
  try {
    set(JSON.parse(persistedEvents));
  } catch {
    set({});
  }
});

events.subscribe((value) => {
  try {
    localStorage.setItem("events", JSON.stringify(value));
  } catch {
    alert("Failed to save.");
  }
});

export default events;
