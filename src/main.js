import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// Pinia Persisted State
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";


const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount("#app");
