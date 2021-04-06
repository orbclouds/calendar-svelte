<script lang="ts" context="module">
  import type { Events } from '@app/events';
</script>

<script lang="ts">
  import { Link } from 'svelte-routing';

  import dayStore from '@app/day';
  import events from '@app/events';
  import { getDateString } from '@app/utils';

  export let year: string;
  export let month: string;
  export let day: string;

  dayStore.set(
    new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    )
  );

  $: dateKey = getDateString(
    $dayStore,
    '-'
  );

  $: eventsOnDay =
    $events[dateKey] || [];

  const deleteEvent = (
    name: string
  ) => () => {
    events.update((prev) => ({
      ...prev,
      [dateKey]: prev[dateKey].filter(
        (value) => value !== name
      ),
    }));
  };
</script>

<main>
  <header>
    <Link to="/" title="Home"
      >&lt; Back</Link
    >
    <span>
      {$dayStore.toDateString()}
    </span>
    <Link
      to={`/event/${getDateString(
        $dayStore
      )}`}
      title="Add an Event"
    >
      + New Event
    </Link>
  </header>

  <section>
    {#each eventsOnDay as name}
      <div class="event">
        <div class="name">
          {name}
        </div>
        <button
          type="button"
          on:click={deleteEvent(name)}
        >
          - Delete Event
        </button>
      </div>
    {/each}
  </section>
</main>

<style>
  main {
    max-width: 1024px;
    width: 90%;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6em;
  }

  section {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
  }

  div.event {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-radius: 16px;
    border: solid 1px;
    margin: 8px 0;
    border-color: rgba(0, 0, 0, 0.05);
    transition: background 0.3s
        cubic-bezier(0.25, 0.1, 0.25, 1),
      border-color 0.3s
        cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  div.event:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.08);
  }
</style>
