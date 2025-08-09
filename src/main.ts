import "./style.css";
import { Theme } from "./theme";
import { createApp } from "vue";
import Main from "@App/Main.vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config"

const app = createApp(Main);

app.use(createPinia());
app.use(PrimeVue, { theme: Theme });

app.mount("#app");
