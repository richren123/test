<!-- src/views/DataAnalysis.vue -->
<template>
  <div class="dual-pane">
    <div class="left-pane">
      <TreeWithLines :treeData="treeData" />
    </div>
    <div class="right-pane">
      <CustomTable :tableData="tableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeWithLines from '@/components/TreeWithLines.vue'
import CustomTable from '@/components/CustomTable.vue'
import { financialTableData } from '@/mock/financialData.ts'

interface FinancialData {
  name: string;
  value?: string;
}

// 从 tableData 自动生成 treeData
const tableData: FinancialData[] = financialTableData
const treeData = tableData.map((item: FinancialData, index: number) => ({
  id: `node${index + 1}`,
  label: item.name
}))
</script>

<style scoped>
.dual-pane {
  display: flex;
  height: 100vh;
}
.left-pane {
  width: 30%;
  padding: 20px;
  border-right: 1px solid #ddd;
}
.right-pane {
  flex: 1;
  padding: 20px;
}
</style>