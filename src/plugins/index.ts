/*
 * @Author: xuyijie
 * @Date: 2022-12-01 14:45:38
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 13:10:26
 * @Description: 文件说明
 */
import { App } from 'vue'
import { setUpTaillWindCss } from './tailwindCss'
import { setUpElement } from './ElementPlus'
import { setUpAnimate } from './animate'
export function setUpPlugins(app: App) {
  setUpElement(app)
  setUpTaillWindCss()
  setUpAnimate()
}
