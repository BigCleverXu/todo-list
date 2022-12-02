<!--
 * @Author: xuyijie
 * @Date: 2022-12-02 14:17:11
 * @LastEditors: xuyijie
 * @LastEditTime: 2022-12-02 14:28:02
 * @Description: 文件说明
-->
<script lang="ts" setup>
  const { find, finishTodo, sumTodo, waitTodo } = useTodo()
  const chooseStatus = (type: boolean | string) => {
    find(type)
  }
</script>
<template>
  <section class="flex gap-2">
    <el-card shadow="never" :body-style="{ padding: '20px' }">
      <template #header>
        <h1 class="cursor-pointer" @click.native="chooseStatus(true)">已完成</h1>
      </template>
      <h1 class="text-center">{{ finishTodo }}</h1>
    </el-card>
    <el-card shadow="never" :body-style="{ padding: '20px' }">
      <template #header>
        <h1 class="cursor-pointer" @click.native="chooseStatus(false)">未完成</h1>
      </template>
      <h1 class="text-center">{{ waitTodo }}</h1>
    </el-card>
    <el-card shadow="never" :body-style="{ padding: '20px' }">
      <template #header>
        <h1 class="cursor-pointer" @click.native="chooseStatus('')">共计</h1>
      </template>
      <h1 class="text-center">{{ sumTodo }}</h1>
    </el-card>
  </section>
</template>
