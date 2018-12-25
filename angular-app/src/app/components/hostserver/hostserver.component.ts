import { Component, OnInit,DoCheck} from '@angular/core';
import {HttpclientService} from '../../utils/httpclient.service';
import {Utils} from '../../utils/dk_utils';
@Component({
  selector: 'hostserver',
  templateUrl: './hostserver.component.html',
  styleUrls: ['./hostserver.component.css']
})
export class HostserverComponent implements OnInit {
  text:string='';
  mesArr:Array<any>=[];
  constructor(private http:HttpclientService) { }
  getMes(mesName,mesText){
       let mesObj={"mesTime":'',"mesName":'',"mesText":''};
       let time=Utils.dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss');
        mesObj['mesTime']=time;
        mesObj["mesName"]=mesName;
        mesObj["mesText"]=mesText;
        this.mesArr.push(mesObj);
     }
  talkInit(){
      setTimeout(()=>{
        this.getMes("小家","你好，我是客服小家，请问有什么可以帮助你的？");
      },1000)
  }
  ngOnInit() {
      this.talkInit();
  }
  pushMes(par){
      let name=window.localStorage.getItem('username');
      if(!name){
          this.getMes("住百家访客",par);
      }else{
          this.getMes('用户'+name,par);
      }
      setTimeout(()=>{
        this.getMes("小家","小家不在呢，你可以稍后再联系呢！不过我会尽快找你的哟！");
     },Math.random()*5000+1) 
      this.http.get('aianser',{"ask":this.text}).then((res)=>{
          if(res['data'].length==0){
              setTimeout(()=>{
                 this.getMes("小家","小家不在呢，你可以稍后再联系呢！不过我会尽快找你的哟！");
              },Math.random()*5000+1) 
          }else{
              setTimeout(()=>{
                  this.getMes('小家',res['data'][0].anser);
              },Math.random()*5000+1) 
          }
      })
      this.text='';
  }
}
