/*
 * @Author: xuyijie
 * @Date: 2022-12-01 14:30:27
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 16:34:50
 * @Description: 文件说明
 */
import '@/styles/index.scss'

import App from './App.vue'
import { setUpPlugins } from './plugins'
const app = createApp(App)
setUpPlugins(app)
app.mount('#app')
