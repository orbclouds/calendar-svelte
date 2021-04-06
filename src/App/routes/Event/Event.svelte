<script>
  import dayStore from '@app/day';
  import events from '@app/events';
  import { getDateString } from '@app/utils';
  import { navigate } from 'svelte-routing';

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

  let event = {
    name: '',
    date: getDateString($dayStore, '-'),
  };

  const createEvent = () => {
    events.update((prev) => ({
      ...prev,
      [event.date]: [
        ...(prev[event.date]
          ? prev[event.date]
          : []),
        event.name,
      ],
    }));
    navigate('/');
  };

  const goBack = () => {
    navigate('/');
  };
</script>

<main>
  <h1>Create an Event</h1>

  <form
    on:submit|preventDefault={createEvent}
  >
    <section>
      <label for="name"> Name: </label>
      <br />
      <input
        id="name"
        type="text"
        bind:value={event.name}
        required
      />
    </section>
    <section>
      <label for="date"> Date: </label>
      <br />
      <input
        type="date"
        bind:value={event.date}
        required
      />
    </section>
    <section>
      <button
        type="button"
        on:click={goBack}
      >
        Cancel
      </button>
      <button type="submit">
        Create
      </button>
    </section>
  </form>
</main>

<style>
  main {
    width: 80%;
    margin: 0 auto;
    max-width: 400px;
  }

  form {
    width: 100%;
    display: flex;
    font-size: 1em;
    align-items: center;
    flex-direction: column;
  }

  section {
    width: 100%;
    margin: 8px 0;
  }

  input {
    width: 100%;
    font: inherit;
    margin-top: 8px;
    appearance: none;
    border: solid 1px;
    padding: 8px 12px;
    border-radius: 8px;
    border-color: rgba(
      173,
      86,
      86,
      0.05
    );
    background: rgba(0, 0, 0, 0.03);
    transition: background 0.3s
        cubic-bezier(0.25, 0.1, 0.25, 1),
      border-color 0.3s
        cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  input:hover {
    background: rgba(0, 0, 0, 0.065);
    border-color: rgba(0, 0, 0, 0.065);
  }

  input:focus {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.08);
  }
</style>
