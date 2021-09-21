import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as svgIcon from '@element-plus/icons'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
// global register ele-svg-isConcatSpreadable
for (const [key, value] of Object.entries(svgIcon)) {
  app.component(key, value)
}
app.mount('#app')
