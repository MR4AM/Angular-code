import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { HttpclientService } from '../../utils/httpclient.service'


@Component({
    selector: 'pay',
    templateUrl: './pay.component.html',
    styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
    
    dataset:Array<any> = [];
    proInfo:Array<any> = [];
    id:string;
    show:boolean = false;
    btnstr:string = '取消订单';
    constructor(private route:ActivatedRoute,private http:HttpclientService) { }

    ngOnInit() {
        this.route.params.subscribe((params)=>{
            this.id = params.encode;
            this.http.get('orderlist',{id:this.id}).then(res=>{
                if(res['status']){
                    this.dataset = res['data'][0];
                    if(this.dataset['status'] == -1)
                        this.btnstr = '已取消';

                    this.http.get('gethouse',{id:this.dataset['pronumber']}).then(result=>{
                        if(result['status']){
                            this.proInfo = result['data'][0];
                        }
                    })
                }
            })
        })
    }   
    showpopup(){
        if(this.dataset['status'] != -1)
        this.show = true;
    } 
    isCancel(flag){
       
        if(flag){
            this.http.post('cancelorder',{id:this.id,status:-1}).then(res=>{
                console.log(res);
                if(res['status']){
                    this.show = false;
                    this.btnstr = '已取消';
                    this.dataset['status'] = -1;
                }
            })
        }else{
            this.show = false;
        }
    }

}
