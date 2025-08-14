import "./style.css";
import { Theme } from "./theme";
import { createApp } from "vue";
import Main from "@App/Main.vue";

import { Router } from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config"

const app = createApp(Main);

app.use(Router);
app.use(createPinia());
app.use(PrimeVue, { theme: Theme });

app.mount("#app");
