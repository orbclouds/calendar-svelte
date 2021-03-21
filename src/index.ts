import App from '@app/App';

import '@app/global.css';

const target = document.getElementById('app');
const app = new App({ target });

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}