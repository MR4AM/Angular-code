import { Component, OnInit } from '@angular/core';
const topNav=[
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]}
]
const leftNav=[
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]},
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]},
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]}
]
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  topNav=topNav;
  leftNav=leftNav;
  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }]
  mapIntance:any;
  cityList='';
  geoCoordMapData='';
  option='';
  constructor() { }

  onMapInit(ev){//地图初始化
    var thisFunc =this;
    this.mapIntance = ev;
 }
 //this.cityList 与this.geoCoordMapData是从后台接口获取的数据
//接口如下：
getCityRegion(){
  this.getMapOption([],{})
    // this.option = this.getMapOption([],{})//初始化地图
    // this.option = this.getMapOption(this.cityList,this.geoCoordMapData);
    // this.mapIntance.setOption(this.option);//更新地图数据
}

ngOnInit(){
this.getCityRegion()
}
getMapOption(mapdata,geoCoordMapData)
{
    var mapData = mapdata;
     var geoCoordMap = geoCoordMapData;
     // debugger
     var convertData = function (data) {
         var res = [];
         for (var i = 0; i < data.length; i++) {
             var geoCoord = geoCoordMap[data[i].name];
             if (geoCoord) {
                 res.push({
                     name: data[i].name,
                     value: geoCoord.concat(data[i].value),
                     id:geoCoord.concat(data[i].cityId)
                 });
             }
         }
         return res;
     };
     return {
         backgroundColor: '#404a59',
         title: {
             text: '全国主要城市用户分布',
             // subtext: 'data from PM25.in',
             // sublink: 'http://www.pm25.in',
             x:'center',
             textStyle: {
                 color: '#fff'
             }
         },
         tooltip: {
             trigger: 'item',
             formatter: function (params) {
                 return params.name+','+params.value[2];
             }
         },
         legend: {
             orient: 'vertical',
             y: 'bottom',
             x:'right',
             data:['用户数量'],
             textStyle: {
                 color: '#fff'
             }
         },
         toolbox: {
             iconStyle: {
                 normal: {
                     borderColor: '#fff',
                 },
                 emphasis: {
                     borderColor: '#b1e4ff'
                 }
             },
             feature:{
                 brush:{
                     type:['rect']
                 }
             },
             right:30,
             // width:50,
             // height:48
         },
         brush: {
             outOfBrush: {
                 color: '#abc'
             },
             brushStyle: {
                 borderWidth: 2,
                 color: 'rgba(0,0,0,0.2)',
                 borderColor: 'rgba(0,0,0,0.5)',
             },
             seriesIndex: [0, 1],
             throttleType: 'debounce',
             throttleDelay: 300,
             geoIndex:0 //规定坐标

         },
         visualMap: {
             min: 1,
             max: 200,
             calculable: true,
             inRange: {
                 color: ['#50a3ba', '#eac736', '#d94e5d']
             },
             textStyle: {
                 color: '#fff'
             }
         },
         geo: {
             map: 'china',
             label: {
                 emphasis: {
                     show: false
                 }
             },
             roam: true,
             itemStyle: {
                 normal: {
                     areaColor: '#323c48',
                     borderColor: '#111'
                 },
                 emphasis: {
                     areaColor: '#2a333d'
                 }
             }
         },
         series: [
         {
             name: '用户数量',
             type: 'scatter',
             coordinateSystem: 'geo',
             data: convertData(mapData),
             symbolSize: 12,
             label: {
                 normal: {
                     show: false
                 },
                 emphasis: {
                     show: false
                 }
             },
             itemStyle: {
                 emphasis: {
                     borderColor: '#fff',
                     borderWidth: 1
                 }
             }
         }
         ]
     }
    }
}
