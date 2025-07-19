<!-- src/components/CustomTable.vue -->
<template>
  <el-table :data="tableData" border class="custom-table">
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="value" label="数值"></el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineProps<{
  tableData: { name: string; value: string }[]
}>()
</script>

<style scoped>
.custom-table ::v-deep .el-table__row {
  position: relative;
}
</style>