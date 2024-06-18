import { createApp } from 'vue';

import App from './App.vue'
import PersonalVision from './components/PersonalVision.vue'

const app = createApp(App)

app.component('personal-vision', PersonalVision);

app.mount('#app');