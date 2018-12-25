import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpclientService } from '../../utils/httpclient.service'
@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    
    dataset:Array<any> = [];
    status:string;
    show:boolean = false;
    id:string;

    username:string = window.localStorage.getItem('username');




    constructor(private router:Router,private http:HttpclientService) { }
        
    ngOnInit() {
        console.log(this.dataset.length)
        if(this.username){
            this.http.get('orderlist',{username:this.username}).then(res=>{
                if(res['status']){
                    this.dataset = res['data'];
                }
            })
        }
    }

    goTodetail(id){
        this.router.navigate(['orderdetail/' + id]);
    }
    goToPay(id){
        this.router.navigate(['pay/' + id]);
    }
    showpopup(id){
        event.stopPropagation();
        this.show = true;
        this.id = id;
    } 

    isCancel(flag){
        if(flag){
            this.http.post('cancelorder',{id:this.id,status:-1}).then(res=>{
                if(res['status']){
                    this.show = false;
                    this.ngOnInit();
                }
            })
        }else{
            this.show = false;
        }
    }
}
