import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

import App from "./App.vue";

console.log(ElementPlus.version);

createApp(App).use(ElementPlus).mount("#app");
