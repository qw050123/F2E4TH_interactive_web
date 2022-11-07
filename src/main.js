import { createApp } from 'vue';
import Main from './Main.vue';
import router from './router';
import '@/style/_style.scss';

createApp(Main).use(router).mount('#app');
