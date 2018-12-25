import { Component, OnInit, ElementRef,ViewChild,AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MapOptions } from 'angular2-baidu-map';
import {HttpclientService} from '../../utils/httpclient.service';
declare var Swiper:any;

@Component({
  selector: 'detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailComponent implements OnInit,AfterViewInit{
  public opts: MapOptions;
    @ViewChild('body') body:ElementRef;
    dataset:Object={};
    city:String=null;
   imgArr: Array<any> = [];
   spanArr: Array<any> = [];
   html:Object={};
   imgSrc:String=null;
   state:Boolean =false;
    spinner_show:Boolean=true;
  constructor(private http:HttpclientService,private route: ActivatedRoute, private router: Router) {
      console.log(this.dataset);
    this.opts = {
           centerAndZoom: {
               lng:113.269459,
               lat: 23.15635,
               zoom: 19
           },
           enableHighResolution:true,
           disableDoubleClickZoom:false,
           disablePinchToZoom:false
       };
   }
  ngOnInit() {
      setTimeout(function(){
         var mySwiper = new Swiper('.swiper-container', {
          autoplay:{
              speed:1000,
           },
           effect : 'cube',
            cubeEffect: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 400,
              shadowScale: 0.6
            },
        }) 
      }, 1000)
      var id=this.route.snapshot.paramMap.get('id');
      this.http.get('gethouse',{"id":id}).then((res)=>{
        this.dataset=JSON.parse(JSON.stringify(res['data'][0]))
        this.imgArr=JSON.parse(JSON.stringify(this.dataset['proImg'].split(';')));
        // this.imgArr.push(this.imgArr[0]);
        this.spanArr=JSON.parse(JSON.stringify(this.dataset['proSpec'].split(',')));
        this.spinner_show=false;
      })  
  }
  ngAfterViewInit(){

    
  }
  pushorder(par){
    if(!window.localStorage.getItem('username')){
     this.router.navigate(['login']);
    }else{
       this.router.navigate(['orderwrite',par]);
    }
  }
  changeState(content){
      this.state=!this.state;
      switch(content){
          case 'housedetail':
          this.html={"h3":"房屋介绍","p":'公寓位于'+this.dataset['city']+'，设计格局'+this.dataset['proSpec']+'。室内布置现代家居，生活基础设施齐全，采光通风好，提供开放式厨房，地理位置优越，周围的交通设施与生活便利设施均在步行距离之内，相信会给您一次舒适的体验。'}
          break;
          case 'houseposition':
          this.html={"h3":"地理位置介绍","p":"公寓附近交通便利，公寓周边娱乐：餐厅，咖啡馆，蛋糕店，购物街，剧院，夜市，公园，艺术馆等众多景点。"}
          break;
          case 'housesevice':
          this.html={"h3":"房屋设备","p":"1.空调 2.暖气3.洗衣机4.电视机5.毛巾6.电脑7.计生用品"}
          break;
          case 'cancelpolicy':
          this.html={"h3":"取消政策","p":"在入住之前，您可以通过网上“我的订单－订单详情”界面进行取消，取消后具体的退款规则如下: 入住前31天及以上取消预订，可退订单金额的75%；"}
          break;
          case 'houserule':
          this.html={"h3":"房屋守则","p":"请尊重当地文化、不要破坏房屋设施、我们会在每个房间入住前让您阅读相关房屋守则"}
          break;
          case 'emergency':
          this.html={"h3":"赔偿与应急政策","p":"在入住期间、由于我们的疏忽而造成您的损失，我们公司会做出相应的补偿。当您在住宿期间发生的任何不可调控问题请及时联系我们！我们将竭诚为您服务。"}
          break;

          default:
          this.html={};
      }
  }

}
