import { Component, OnInit } from '@angular/core';
var data = [];
for (var i = 0; i <= 100; i++) {
    var theta = i / 100 * 360;
    var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
    data.push([r, theta]);
}
@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {
  options1: any;
  options2:any;
  constructor() { }

  ngOnInit() {
    this.renderChart1();
    this.renderChart2();
  }
  renderChart1(){
    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.options1 = {
      legend: {
      data: ['bar', 'bar2'],
      align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
        show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
        return idx * 10;
      }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
        return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }
  //渲染第二个图表
  renderChart2(){
    this.options2={
        title: {
            text: '画出来最丑的心'
        },
        legend: {
            data: ['line']
        },
        polar: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            data: data
        }]
    }
  }

}
