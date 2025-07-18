<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  { date: '2023-01-01', name: '张三', address: '北京市' },
  { date: '2023-01-02', name: '李四', address: '上海市' },
  { date: '2023-01-03', name: '王五', address: '广州市' },
])
</script>