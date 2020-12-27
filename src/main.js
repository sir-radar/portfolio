import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { stateSymbol, createState } from './store';
import './assets/styles/index.css';
import { FontAwesomeIcon } from '@/plugins/font-awesome';

const app = createApp(App)
  .use(router)
  .provide(stateSymbol, createState())
  .component('fa', FontAwesomeIcon);
  router.isReady().then(() => {
    app.mount('#app');
  })
