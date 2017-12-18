<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        dimension: '位置',
        metrics: ['人口', '面积'],
        dataType: {
          '面积': 'KMB'
        }
      }
    }
  }
</script>