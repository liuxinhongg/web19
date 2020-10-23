<template>
  <div>
    <div id="echarts" style="width: 600px;height:400px;"></div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
  // import echarts from "echarts"
  export default {
    created() {
      // this.getEchart()
      this.$nextTick(()=>{
        this.getEchart()
        this.drawLine();
      })
    },
    methods:{
      getEchart(){
        var myChart = this.$echarts.init(document.getElementById("echarts"));
       var option= {
            angleAxis: {
                   type: 'category',
                   data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
               },
               radiusAxis: {
               },
               polar: {
               },
               series: [{
                   type: 'bar',
                   data: [1, 2, 3, 4, 3, 5, 1],
                   coordinateSystem: 'polar',
                   name: 'A',
                   stack: 'a'
               }, {
                   type: 'bar',
                   data: [2, 4, 6, 1, 3, 2, 1],
                   coordinateSystem: 'polar',
                   name: 'B',
                   stack: 'a'
               }, {
                   type: 'bar',
                   data: [1, 2, 3, 4, 1, 2, 5],
                   coordinateSystem: 'polar',
                   name: 'C',
                   stack: 'a'
               }],
               legend: {
                   show: true,
                   data: ['A', 'B', 'C']
               }
        };
        myChart.setOption(option)
      },
      drawLine(){
              // 基于准备好的dom，初始化echarts实例
              let myChart = this.$echarts.init(document.getElementById('myChart'))
              // 绘制图表
              myChart.setOption({
                  title: { text: '在Vue中使用echarts' },
                  tooltip: {},
                  xAxis: {
                      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                  },
                  yAxis: {},
                  series: [{
                      name: '销量',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20]
                  }]
              });
          }
    }
  }
</script>

<style>
</style>
