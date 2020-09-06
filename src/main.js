import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/index.css';
import { FontAwesomeIcon } from '@/plugins/font-awesome';

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
