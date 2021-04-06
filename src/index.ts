import App from '@app/App';

import '@app/global.css';

const target = document.getElementById(
  'app'
);

if (!target)
  throw new Error('Target is null');

const app = new App({ target });

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
