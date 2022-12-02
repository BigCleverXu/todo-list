<!--
 * @Author: xuyijie
 * @Date: 2022-12-02 16:06:10
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 17:11:24
 * @Description: 文件说明
-->
<script lang="ts" setup>
  const { toggleStatusTodo, onblur, removeTodo, editTodo, input, list, find } = useTodo()
  const { dateNow } = useTime()
  onMounted(() => {
    nextTick(() => {
      find(false)
    })
  })
</script>
<template>
  <template v-for="(i, index) in list">
    <el-card
      @dblclick="editTodo(index)"
      shadow="hover"
      :style="{ 'animation-duration': `${index ? index : 1}000ms` }"
      class="my-3 animate__animated animate__fadeInDown"
      :body-style="{ padding: '20px' }"
    >
      <span class="flex items-center justify-between">
        <span class="flex gap-3 font-bold items-center">
          第{{ index + 1 }}条：
          <h3 v-if="!i.edit">{{ i.name }}</h3>

          <span v-else>
            <input ref="input" type="text" @blur="onblur(index)" class="input" :value="i.name" @input="e => (i.name = (e.target as HTMLInputElement).value)" />
          </span>
        </span>
        <div class="flex gap-2">
          <h1 v-if="!i.finish">在 {{ dateNow(i.createDate) }}创建</h1>
          <h1 v-else>在 {{ dateNow(i.finishDate!) }}完成</h1>
          <el-button v-if="!i.finish" type="success" size="small" @click="toggleStatusTodo(index)">完成</el-button>
          <el-button type="danger" size="small" @click="removeTodo(index)">删除</el-button>
        </div>
      </span>
    </el-card>
  </template>
</template>
