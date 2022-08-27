import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElCollapseTransition } from 'element-plus'
import 'element-plus/theme-chalk/base.css'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router,VueAxios,axios)

app.mount('#app')
