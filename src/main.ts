import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight, faChevronDown, faHome, faCubes, faTh } from '@fortawesome/free-solid-svg-icons';
import router from './router/router';
import './assets/style.scss';

library.add(faChevronRight, faChevronDown, faHome, faCubes, faTh);


const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');