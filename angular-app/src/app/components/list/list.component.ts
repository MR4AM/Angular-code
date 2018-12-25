import { Component, OnInit } from '@angular/core';
import {HttpclientService} from '../../utils/httpclient.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoadmoreModule } from 'ngx-weui';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    datasetArr:Array<any>=[];
    showArr:Array<any>=[];
    showitemnum:number=0;
    imgArr:Array<any>=[];
    spanArr:Array<any>=[];
    modal_mask_show:Boolean = false;
    spinner_show:Boolean=true;
    nolist_show:Boolean=false;
    loadmore_show:Boolean=false;
    constructor(private http:HttpclientService,private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        var city=this.route.snapshot.paramMap.get('city');
        this.http.get('gethouse',{"city":city}).then((res)=>{
            if(res['data'].length==0){
                this.nolist_show=true;
            }
            this.datasetArr=JSON.parse(JSON.stringify(res['data']))
            this.showArr=this.datasetArr.slice(0,2);
            for(var i=0;i<this.datasetArr.length;i++){
               this.imgArr.push(this.datasetArr[i]['proImg'].split(';')[0])
               this.spanArr.push(this.datasetArr[i]['proSpec'].split(',')[0])
            }
            this.spinner_show=false;
        })
    }
    linkTo(par){
        this.router.navigate(['detail',par]);
    }
    loadmore(){
        if(this.showitemnum>=this.datasetArr.length-2){
           this.loadmore_show=true;
            return false;
        }else{
            this.showitemnum++;
            this.showArr.push(this.datasetArr[this.showitemnum]);
        }
    }


    //method
    maskshow(e){
        this.modal_mask_show = !this.modal_mask_show;
        
    }
}
