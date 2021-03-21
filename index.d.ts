declare module '*.svelte'

declare interface ImportMeta {
  hot: {
    accept: () => unknown;
    dispose: (cb: () => unknown) => unknown;
  };
}