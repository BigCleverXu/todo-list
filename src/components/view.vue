<!--
 * @Author: xuyijie
 * @Date: 2022-12-01 14:30:27
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 16:31:27
 * @Description: 文件说明
-->
<script setup lang="ts">
  const { getTodo, submit, waitTodo, input, search } = useTodo()
  onMounted(() => {
    getTodo()
  })
</script>

<template>
  <section>
    <section class="flex-col w-[1200px] m-auto p-8">
      <section class="w-full flex items-center">
        <input type="text" class="input" placeholder="请输入代办事项" :value="search" @input="e => (search = (e.target as HTMLInputElement).value)" />
        <el-button type="primary" size="large" @click="submit">确认({{ waitTodo }})</el-button>
      </section>
      <TodoCard />
    </section>
    <el-card class="absolute top-8 right-8" shadow="never" :body-style="{ padding: '20px' }">
      <template #header>
        <h1>提示</h1>
      </template>
      <Tip />
    </el-card>
  </section>
</template>
