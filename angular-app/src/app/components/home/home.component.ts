import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../utils/httpclient.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var Swiper:any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotarea=[];
  findgood=[];
  list = ['精选', '大阪', '东京','普吉岛','京都','苏梅岛','曼谷','巴厘岛'];
  index=0;
  newres:Array<any>=[];
  citygoods:Array<any>=[];

  imgArr:Array<any>=["http://simg1.zhubaijia.com/1513843781/tes4BxvTnAqE8HYF3P6YwhniJVVyi7z2.jpg","http://simg1.zhubaijia.com/1503571639/xoPVEHVwXJHyQPfh88qJWyHCpFzk9jY7.jpg","http://simg1.zhubaijia.com/1503571647/NCrHB76fBiHGXCgjRVXDZFw46bvY7AG3.jpg"];
  spinner_show:Boolean=true;
  text:string="";
  constructor(private http:HttpclientService,private router:Router){

  }
  searchhome(search){
     this.router.navigate(['list', search]);
  }
  choose(idx){
    this.index = idx;
    let city = this.list[idx];
    if(city == "精选"){
      this.http.get('gethouse').then((res)=>{
         this.citygoods = JSON.parse(JSON.stringify(res['data'].slice(0,5)));
       })
    }else{
      this.http.get('citygoods',{city:city}).then((res)=>{
        this.citygoods = JSON.parse(JSON.stringify(res));
        this.spinner_show=false;
      })
    }
  }
  //跳转
  jump(item){
      this.router.navigate(['list', item['city']]);
  }
  homejumptodet(id){
      this.router.navigate(['detail', id]);
  }
  ngOnInit() {
    setTimeout(function(){
  	     var mySwiper = new Swiper('#swiper-container', {
        //等同于以下设置
          autoplay:true,
          loop:true,
          lazy:{loadPrevNext: true},
        })
    }, 1000)

     this.http.get('gethouse').then((res)=>{
         this.citygoods = JSON.parse(JSON.stringify(res['data'].slice(0,5)));
       })

    this.http.get('citytype').then((res)=>{
        this.spinner_show=false;
      this.newres = JSON.parse(JSON.stringify(res))
        for(let item of this.newres){
          if(item['type'] == "热点区域"){
            this.hotarea.push(item)
          }else{
            this.findgood.push(item)
          }
        }

    })
  }
 
}

