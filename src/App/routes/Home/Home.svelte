<script lang="ts" context="module">
  import type { Events } from "@app/events";

  interface Today {
    year: number;
    month: number;
    weekday: number;
    day: number;
  }

  const DAYS_IN_WEEK = 7;
  const TODAY = new Date();

  const getFormattedDay = (day: Date): Today => ({
    year: day.getFullYear(),
    month: day.getMonth(),
    weekday: day.getDay(),
    day: day.getDate(),
  });

  const getNumberOfWeeks = ({ year, month }: Today): number => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysToSecondWeek = 7 - firstDayOfMonth.getDay();
    const daysFromSecondLastWeekToLastDay = 1 + lastDayOfMonth.getDay();
    const numberOfWeeks =
      2 +
      (lastDayOfMonth.getDate() -
        daysFromSecondLastWeekToLastDay -
        daysToSecondWeek) /
        7;
    return numberOfWeeks;
  };

  const getFirstDayOfWeek = (i: number, { year, month }: Today): Today => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstVisibleDayOfMonth = new Date(
      year,
      month,
      1 - firstDayOfMonth
    ).getDate();
    const firstDayOfWeek = new Date(
      year,
      month - 1,
      firstVisibleDayOfMonth + i * 7
    );
    return getFormattedDay(firstDayOfWeek);
  };
</script>

<script lang="ts">
  import dayStore from "@app/day";
  import events from "@app/events";
  import { getDateString } from "@app/utils";

  import { Link, navigate } from "svelte-routing";

  const changeMonth = (by: number) => () => {
    dayStore.set(
      new Date(
        $dayStore.getFullYear(),
        $dayStore.getMonth() + by,
        $dayStore.getDate()
      )
    );
  };

  const deleteAllEvents = () => {
    events.set({} as Events);
  };

  $: current = getFormattedDay($dayStore);

  $: numberOfWeeks = getNumberOfWeeks(current);

  $: weeks = new Array(numberOfWeeks).fill(null).map((_, i) => {
    const { year, month, day } = getFirstDayOfWeek(i, current);
    return new Array(DAYS_IN_WEEK).fill(null).map((_, j) => {
      return new Date(year, month, day + j);
    });
  });
</script>

<main>
  <h1>
    <span class="soft">Today is</span>
    {TODAY.toDateString()}
  </h1>

  <table>
    <thead>
      <tr>
        <th>
          <button on:click={changeMonth(-1)} type="button" class="change-month">
            &lt;
          </button>
        </th>
        <th colspan={5}>
          {$dayStore.toLocaleString(undefined, { month: "long" })}
          {$dayStore.getFullYear()}
        </th>
        <th>
          <button on:click={changeMonth(1)} type="button" class="change-month">
            &gt;
          </button>
        </th>
      </tr>
      <tr class="actions">
        <th colspan={7}>
          <Link to={`/event/${getDateString($dayStore)}`} title="Add an Event">
            + New Event
          </Link>
          <button type="button" on:click={deleteAllEvents}>
            - Delete All Events
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each weeks as week}
        <tr>
          {#each week as day}
            <td class:events={!!$events[getDateString(day, "-")]}>
              <Link
                class={`date-link ${
                  day.toDateString() === TODAY.toDateString() ? "today" : ""
                } ${
                  day.toDateString() === $dayStore.toDateString()
                    ? "current"
                    : ""
                }`}
                to={`/day/${getDateString(day)}`}
              >
                {day.getDate()}
              </Link>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style>
  h1 span.soft {
    opacity: 0.32;
    font-size: 0.8em;
  }

  main {
    width: 90%;
    margin: 0 auto;
    max-width: 1024px;
  }

  table {
    width: 100%;
    padding: 32px;
    border-radius: 16px;
    border: solid 1px #ccc;
  }

  thead {
    font-size: 1.6em;
  }

  tr.actions {
    font-weight: 400;
    font-size: 0.8em;
  }

  td {
    height: 70px;
    position: relative;
  }

  @media only screen and (min-width: 568px) {
    td {
      height: 100px;
    }
  }

  td.events::after {
    left: 50%;
    width: 8px;
    height: 8px;
    content: "";
    bottom: 20%;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.3);
  }

  table :global(a.date-link) {
    width: 100%;
    height: 100%;
    padding: 8px;
    display: block;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  @media only screen and (min-width: 568px) {
    table :global(a.date-link) {
      padding: 16px;
    }
  }

  table :global(a.date-link.current) {
    opacity: 0.8;
    font-weight: bold;
    font-size: 0.9em;
    background: rgba(0, 0, 0, 0.05);
  }

  table :global(a.date-link:hover) {
    background: rgba(0, 0, 0, 0.1);
  }

  table :global(a.date-link.today) {
    color: crimson;
    font-weight: bold;
    font-size: 0.9em;
  }
</style>
