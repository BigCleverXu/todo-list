/*
 * @Author: xuyijie
 * @Date: 2022-12-02 16:35:10
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 17:06:05
 * @Description: 文件说明
 */
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

//几天前等
function dateNow(value: number) {
  return dayjs(value).locale('zh-cn').fromNow()
}
export function useTime() {
  return { dateNow }
}
