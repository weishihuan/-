import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ant from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router from './router'
import './style.css'
import 'animate.css';
import i18n from './i18n'; // 引入刚刚创建的 i18n 实例

const app = createApp(App)
app.use(ant);
app.use(i18n);
app.use(createPinia())
app.use(router)

app.mount('#app')
