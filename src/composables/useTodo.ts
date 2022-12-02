/*
 * @Author: xuyijie
 * @Date: 2022-12-02 11:26:58
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 17:10:35
 * @Description: 文件说明
 */
import Storage from '@/utils/index'

const storage = new Storage()
const search = ref('')
const input = ref()
let list = ref<Itodo[]>([])
const sumTodo = ref(0)
const finishTodo = ref(0)
const waitTodo = ref(0)
const submit = () => {
  if (!search.value) {
    ElMessage.error('请输入事项')
  } else {
    addTodo()
    ElMessage.success('已提交')
  }
}

const setTodoNumber = () => {
  sumTodo.value = 0
  finishTodo.value = 0
  waitTodo.value = 0
  sumTodo.value = list.value.length
  if (list.value && list.value.length) {
    list.value.forEach((i: Itodo) => {
      if (i.finish) {
        finishTodo.value++
      } else {
        waitTodo.value++
      }
    })
  }
}
const addTodo = () => {
  const obj: Itodo = {
    name: search.value,
    edit: false,
    finish: false,
    createDate: Date.now(),
  }
  list.value.push(obj)
  storage.set('list', list.value)
  search.value = ''
  sumTodo.value = list.value.length
  setTodoNumber()
}
const getTodo = () => {
  const todolist: Itodo[] = storage.get('list')
  if (todolist && todolist.length) {
    list.value = todolist
    sumTodo.value = list.value.length
  }
  setTodoNumber()
}
const editTodo = (index: any) => {
  list.value[index].edit = true
  nextTick(() => {
    input.value.pop().focus()
  })
}
const removeTodo = async (index: any) => {
  try {
    await ElMessageBox.confirm('是否确认删除', { confirmButtonText: '确认', cancelButtonText: '取消' })
    list.value.splice(index, 1)
    storage.set('list', list.value)
    ElMessage.success('已删除')
    setTodoNumber()
  } catch (error) {
    ElMessage.info('已取消')
  }
}
const onblur = (index: any) => {
  list.value[index].edit = false
  list.value[index].createDate = Date.now()
  storage.set('list', list.value)
  ElMessage.success('修改成功')
}
const find = (type: boolean | string) => {
  const storageList = storage.get('list')
  const arr = []
  for (let index = 0; index < storageList.length; index++) {
    const element = storageList[index]

    if (element.finish == type) {
      arr.push(element)
    }
  }
  list.value = arr
  if (type === '') {
    list.value = storageList
  }
}
const toggleStatusTodo = async (index: any) => {
  try {
    await ElMessageBox.confirm('是否已完成', { confirmButtonText: '完成了', cancelButtonText: '没有' })
    list.value[index].finish = !list.value[index].finish
    list.value[index].finishDate = Date.now()

    setTodoNumber()
    storage.set('list', list.value)
  } catch (error) {}
}
export function useTodo() {
  return { toggleStatusTodo, onblur, removeTodo, editTodo, getTodo, submit, waitTodo, finishTodo, sumTodo, list, input, search, find }
}
