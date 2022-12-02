/*
 * @Author: xuyijie
 * @Date: 2022-12-02 09:25:00
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 09:35:11
 * @Description: 文件说明
 */
export default class Storage {
  public set(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value))
  }
  public get(name: string) {
    const data = JSON.parse(localStorage.getItem(name)!)
    return data
  }
}
