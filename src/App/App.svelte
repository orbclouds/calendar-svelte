<script lang="ts">
  import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";

  import { Router, Route } from "svelte-routing";

  import Orb from "@app/Orb";

  import Day from "./routes/Day";
  import Home from "./routes/Home";
  import Event from "./routes/Event";
</script>

{#if import.meta.env.NODE_ENV === "production"}
  <GoogleAnalytics
    properties={[import.meta.env.SNOWPACK_PUBLIC_GOOGLE_ANALYTICS_ID]}
  />
{/if}

<Orb />

<Router>
  <Route path="/event/:year/:month/:day" let:params>
    <Event year={params.year} month={params.month} day={params.day} />
  </Route>

  <Route path="/day/:year/:month/:day" let:params>
    <Day year={params.year} month={params.month} day={params.day} />
  </Route>

  <Route path="/">
    <Home />
  </Route>
</Router>
