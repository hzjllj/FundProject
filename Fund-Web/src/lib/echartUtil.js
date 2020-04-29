import echarts from 'echarts'

export const echartsUtil = {
    
        echartsline(id,data){

        // const option = {
        //             xAxis: {
        //               type: "category",
        //               scale: true,
        //               data: ['05-07','05-23','06-07'],
        //               axisLine:{
        //                 show:false,
        //                 lineStyle:{
        //                     color:'#969696'
        //                 }
        //               },
        //               axisTick:false,
        //               boundaryGap:false,
        //             },
        //             yAxis: {
        //                 //设置y轴小数点
        //                 axisLabel: {                   
        //                     formatter:function (value, index) {           
        //                          return value.toFixed(4);      
        //                     }
        //                 },
        //                 //y轴不从0开始
        //                 scale: true,
        //                 type: "value",
        //                 axisTick:false,
        //                 axisLin
        //                 show:false,
        //                 lineStyle:{
        //                     color:'#969696'
        //                 }
        //               },
        //               min:0.9,
        //               max:1.3,
        //               splitNumber:5,
        //               interval:0.1,
        //                 splitLine:{
        //                     show:true,
        //                     lineStyle:{
        //                         type:'dashed'
        //                     }
        //                 }
        //             },
        //             grid: {
        //                 top: '16%',   // 等价于 y: '16%'
        //                 left: '3%', 
        //                 right: '8%',
        //                 bottom: '3%',
        //                 containLabel: true
        //             },
        //             series: [
        //               {
        //                 data: [0.92,0.98,1.11,1.2,0.88,0.95,1.11,1.19,0.97,1.25,1.27],
        //                 type: "line",
        //                 symbol:'none',
        //                 itemStyle:{
        //                     normal:{
        //                         lineStyle:{
        //                             color:'#EE5000'
        //                         }
        //                     }
        //                 }
        //               }
        //             ]
        //         }
        const option = {
            title: {
                text: '动态数据 + 时间坐标轴'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };
            const myChart = echarts.init(document.getElementById(id));
            return myChart.setOption(option)
    }
}
