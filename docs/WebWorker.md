使用 Web Worker 预处理数据

// main.js
const worker = new Worker('dataProcessor.js');
worker.postMessage(largeDataArray);
worker.onmessage = function(event) {
  chart.setOption({
    series: [{ data: event.data }]
  });
};

// dataProcessor.js
onmessage = function(event) {
  const processedData = event.data.slice(0, 10000); // 示例：取前 10000 条
  postMessage(processedData);
};



Web Worker是什么?

