<script lang="ts">
  import { onMount } from 'svelte';

  const QS = import.meta.env
    .SNOWPACK_PUBLIC_ID
    ? `?id=${
        import.meta.env
          .SNOWPACK_PUBLIC_ID
      }`
    : '';

  let show = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    });
  });
</script>

<aside class:show>
  Deploy full-stack apps fast on Orb!
  <a
    href={`https://www.orbclouds.com${QS}`}
    title="Deploy on Orb">Go</a
  >
</aside>

<style>
  aside {
    top: 0;
    height: 64px;
    display: flex;
    z-index: 9999;
    font-size: 0.9em;
    position: sticky;
    font-weight: 500;
    text-align: center;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    box-shadow: 0 2px 2px
      rgba(0, 0, 0, 0.1);
    transition: transform 0.3s
      cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  aside.show {
    transform: translateY(0%);
  }

  aside a {
    margin: 0 8px;
    display: block;
    padding: 4px 8px;
    border-radius: 2px;
    border: solid 1px #ccc;
    background: rgba(0, 0, 0, 0);
    transition: background 0.1s
      cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  aside a:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  aside a,
  aside a:link,
  aside a:focus,
  aside a:active,
  aside a:visited {
    color: inherit;
    text-decoration: none;
  }
</style>
