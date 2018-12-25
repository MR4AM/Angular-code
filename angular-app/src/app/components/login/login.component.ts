import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; 
import { HttpclientService } from '../../utils/httpclient.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ModalService} from '../../service/modal.service'
// import { Md5 } from 'ts-md5/dist/md5';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show:boolean = false;
  _show:boolean = true;
  res:string = 'abcd';
  phoneCont:string = '';
  vcodeCont:string = '';
  emailCont:string = '';
  passwordCont:string = '';
  vpasswordCont:string = '';
  accountCont:string = '';
  pwdCont:string = '';
  constructor(private http:HttpclientService,private router:Router,private modalservice:ModalService) { }

  ngOnInit() {
  }
  showLog(){
    this.show = true;
    this._show = false;
  }
  showReg(){
    this.show = false;
    this._show = true;
  }
  createCode(){ 
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var res = '';
    for(var i=0;i<4;i++){
        res += str.charAt(Math.floor(Math.random()*26));
    };
    this.res = res;
  }
  changeState(){
    this.modalservice.modalstate=true;
  }

  //手机号验证
  testRegPN(){
    var phoneNo = document.querySelector('.phone')['value'];
    var phoneReg = /^1[34578]\d{9}$/;
    if(!phoneReg.test(phoneNo)){
        this.phoneCont = '请输入正确的号码';
        return false;
    }else{
        this.phoneCont = '';
        this.http.get('beenreg',{username:phoneNo}).then((res)=>{
            if(res['status']){
                this.phoneCont = '';
            }else{
                this.phoneCont = '该用户已注册';
            }
        })
    };

  };
  //验证码验证
  testRegVC(){
    var code = document.querySelector('.code')['innerText'];
    var vCode = document.querySelector('.vcode')['value'];
    if(vCode != code){
        this.vcodeCont = '请输入正确的验证码';
        return false;
    }else{
        this.vcodeCont = '';
    };
    
  };
  //邮箱验证
  testRegEM(){
    var email = document.querySelector('.email')['value'];
    var emailReg = /^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/;
    if(!emailReg.test(email)){
        this.emailCont = '请输入正确的邮箱';
    }else{
        this.emailCont = '';
    }

  }

  //密码验证
  testRegPD(){
    var password = document.querySelector('.password')['value'];
    var passwordReg = /^[a-zA-Z][a-zA-Z\d]{5,}$/;
    if(!passwordReg.test(password)){
        this.passwordCont = '密码不符合规范';
        return false;    
    }else{
        this.passwordCont = '';
    };

  };
  //两次密码输入验证
  testRegVP(){
    var vpassword = document.querySelector('.vpassword')['value'];
    var password = document.querySelector('.password')['value'];
    if(vpassword != password){
        this.vpasswordCont = '两次密码输入不一致';
        return false;
    }else{
        this.vpasswordCont = '';
    };
    
  };
  //登陆时帐号格式验证
  testLogin(){
      var account = document.querySelector('.account')['value'];
      var phReg = /^1[34578]\d{9}$/;
      var emailReg = /^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/;
      if(phReg.test(account) || emailReg.test(account)){
          this.accountCont = '';
      }else{
          this.accountCont = '请输入正确的帐号';
      }
  }

  //注册
  register(){
    var phoneNo = document.querySelector('.phone')['value'];
    var vCode = document.querySelector('.vcode')['value'];
    var password = document.querySelector('.password')['value'];
    var vpassword = document.querySelector('.vpassword')['value'];
    var email = document.querySelector('.email')['value'];
    //发起ajax请求
    if(phoneNo.length>0 && vCode.length>0 && password.length>0 && vpassword.length>0){
        this.http.get('beenreg',{username:phoneNo}).then((res)=>{
            if(res['status']){
                // var md = Md5.hashStr(password).toString();
                var md = password.toString();
                
                this.http.post('register',{username:phoneNo,password:md,phone:phoneNo,email:email}).then((res)=>{
                    //跳转到首页
                    window.localStorage.setItem('username',phoneNo);
                     history.go(-1);
                    // this.router.navigate(['/']);
                })        
            }
        })

    }
    

  }

  //登陆
  login(){
      var account = document.querySelector('.account')['value'];
      var pwd = document.querySelector('.pwd')['value'];
      if(account.length>0 && pwd.length>0){
          this.http.post('login',{username:account,password:pwd}).then((res)=>{
              console.log(res);
              if(res['status']){
                  //将username保存到localstorage
                  window.localStorage.setItem('username',account);
                  
                  //实现页面的跳转
                  // this.router.navigate(['/']);
                   history.go(-1);

              }else{
                this.accountCont = '帐号或密码错误';    
              }
          })
        }
    }


  

  


}
 