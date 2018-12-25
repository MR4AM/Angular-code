import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'rightnav',
  templateUrl: './rightnav.component.html',
  styleUrls: ['./rightnav.component.scss']
})
export class RightnavComponent implements OnInit {
  statusText:string='';
  isLoginText:string='';
  constructor(private route: ActivatedRoute, private router: Router) { }
  logOut(){
      window.localStorage.removeItem('username');
  }
  isLogin(par){
      console.log(par);
     this.router.navigate([par]);
  }
  ngOnInit() {
  	if(window.localStorage.getItem('username')){
          this.statusText='退出登录';
          this.isLoginText='order';
      }else{
          this.statusText='注册/登录';
           this.isLoginText='login';
      }
  }

}
