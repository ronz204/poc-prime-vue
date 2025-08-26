import "./style.css";
import Main from "@App/Main.vue";
import PrimeVue from "primevue/config"

import { Theme } from "./theme";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Router } from "./router";

const app = createApp(Main);

app.use(Router);
app.use(createPinia());
app.use(PrimeVue, { theme: Theme });

app.mount("#app");