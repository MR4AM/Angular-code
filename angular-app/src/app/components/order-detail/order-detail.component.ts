import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpclientService } from '../../utils/httpclient.service'
@Component({
    selector: 'order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

    dataset:Array<any> = [];
    constructor(private http:HttpclientService,private route:ActivatedRoute,private router:Router) { }
    
    ngOnInit() {
        this.route.params.subscribe((params)=>{
            this.http.get('orderlist',{id:params.encode}).then(res=>{
                if(res['status']){
                    this.dataset = res['data'][0];
                }
            })
        })
    }
    goToPay(id){
        this.router.navigate(['pay/' + id]);
    }
}
