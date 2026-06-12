import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import { messages } from './i18n';
import './styles.css';

const savedLocale = localStorage.getItem('portfolio-locale');
const browserLocale = navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';

const i18n = createI18n({
  legacy: false,
  locale: savedLocale || browserLocale,
  fallbackLocale: 'en',
  messages,
});

createApp(App).use(i18n).mount('#app');
