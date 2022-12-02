/*
 * @Author: xuyijie
 * @Date: 2022-12-01 14:44:25
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-01 14:54:08
 * @Description: 文件说明
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export function setUpElement(app: App) {
  app.use(ElementPlus)
}
