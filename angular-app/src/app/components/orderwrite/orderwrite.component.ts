import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpclientService } from '../../utils/httpclient.service'


declare var laydate:any;

@Component({
    selector: 'orderwrite',
    templateUrl: './orderwrite.component.html',
    styleUrls: ['./orderwrite.component.css']
})
export class OrderwriteComponent implements OnInit {
    
    dataset:Array<any> = [];
    imgurl:string;
    max:number;
    count:number = 1;
    showTotal:boolean = false;
    price:number;
    days:number;
    cleanPrice:number = 420.0;
    username:string = window.localStorage.getItem('username');
    tel:string;
    email:string;
    encode:string;
    startTime:string;
    endTime:string;

    flag1: boolean = false;
    flag2: boolean = false;

    params:object;
    spinner_show:Boolean=true;
   

    emailreg:RegExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    phonereg:RegExp = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    constructor(private router:Router,private route:ActivatedRoute,private http:HttpclientService) {  }

    ngOnInit() {

        laydate.render({
            elem:'.mydate',
            type: 'datetime',
            min:0,
            range: '——',
            format: 'yyyy-MM-d',
            btns: ['confirm'],
            mark:{
                '0-04-13':'已租'
            },
            done:function(value,start,end){
                this.showTotal = true;
               
                var arr = [1,3,5,7,8,10,12];
                var dayCount = 0;
                if(arr.indexOf(start.month)>-1){
                    dayCount = 31;  
                }else{
                    dayCount = 30;
                }
                
                this.days = (end.month-start.month)*dayCount + end.date - start.date;
                var timearr = value.split('——');

                this.startTime = timearr[0].slice(0,-1);
                this.endTime = timearr[1].slice(1);

            }.bind(this),   
        })

        
        this.route.params.subscribe((params)=>{

            this.spinner_show=false;

            this.http.get('gethouse',{id:params.id}).then(res=>{
                if(res['status']){
                    this.dataset = res['data'][0];
                    this.imgurl = this.dataset['proImg'].split(';')[0];
                    this.max = this.dataset['proSpec'].match(/\d/)[0];
                    this.price = this.dataset['proPrice'];
                }
            })
        })

    }

    changeCount(str){
        if(str == '-' && this.count > 1){
            this.count -= 1;
        }else if(str == '+' && this.count < this.max){
            this.count += 1;
        }
    }

    telIsRight(){
        if(this.phonereg.test(this.tel)){
            this.flag1 = true;
        }else{
            this.flag1 = false;
        }
    }

    emailIsRight(){
        if(this.emailreg.test(this.email)){
            this.flag2 = true;
        }else{
            this.flag2 = false;
        }
    }

    goToOrder(){
        if(this.showTotal && this.flag1 && this.flag2){

            var now = new Date();
            
            var str = now.getTime();

            var date = now.toLocaleDateString();

            var time = String(date).replace(/\//g,'');

            this.encode = time + str;

            this.params = {
                id:this.encode,
                username:this.username,
                phone:this.tel,
                email:this.email,
                starttime:this.startTime,
                endtime:this.endTime,
                tenants:this.count,
                days:this.days,
                pronumber:this.dataset['id'],
                status:0,
                housename:this.dataset['proName'],
                totalprice:this.price*this.days+this.cleanPrice,
                imgurl:this.imgurl
            }
            this.http.post('addorder',this.params).then(res=>{
                if(res['status']){
                    this.router.navigate(['/pay/'+ this.encode])
                }
            })
        }
    }

}
