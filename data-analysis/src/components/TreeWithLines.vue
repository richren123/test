<!-- src/components/TreeWithLines.vue -->
<template>
  <div class="tree-container">
    <svg class="tree-lines" ref="svgEl"></svg>
    <div class="tree-nodes" ref="treeEl">
      <div
        v-for="node in treeData"
        :key="node.id"
        class="tree-node"
        :ref="(el) => setNodeRef(el, node.id)"
      >
        {{ node.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface TreeNode {
  id: string
  label: string
}

const props = defineProps<{
  treeData: TreeNode[]
}>()

const svgEl = ref<SVGSVGElement | null>(null)
const treeEl = ref<HTMLElement | null>(null)
const nodeRefs = ref<Record<string, HTMLElement>>({})

const setNodeRef = (el: HTMLElement, id: string) => {
  if (el) {
    nodeRefs.value[id] = el
  }
}

const drawLines = () => {
  const svg = svgEl.value
  if (!svg) return

  svg.innerHTML = ''

  const tableRows = document.querySelectorAll('.custom-table-row')
  props.treeData.forEach((node, index) => {
    const nodeEl = nodeRefs.value[node.id]
    const rowEl = tableRows[index] as HTMLElement

    if (nodeEl && rowEl) {
      const x1 = nodeEl.offsetLeft + nodeEl.offsetWidth
      const y1 = nodeEl.offsetTop + nodeEl.offsetHeight / 2
      const x2 = rowEl.offsetLeft
      const y2 = rowEl.offsetTop + rowEl.offsetHeight / 2

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', x1.toString())
      line.setAttribute('y1', y1.toString())
      line.setAttribute('x2', x2.toString())
      line.setAttribute('y2', y2.toString())
      line.setAttribute('stroke', '#999')
      line.setAttribute('stroke-dasharray', '5,5') // 虚线
      line.setAttribute('stroke-width', '1')
      svg.appendChild(line)
    }
  })
}

onMounted(() => {
  drawLines()
  window.addEventListener('resize', drawLines)
})
</script>

<style scoped>
.tree-container {
  position: relative;
  height: 100%;
}
.tree-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.tree-node {
  margin: 10px 0;
}
</style>