import { Component, OnInit } from '@angular/core';
import {Utils} from '../../utils/dk_utils';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-mangerlogin',
  templateUrl: './mangerlogin.component.html',
  styleUrls: ['./mangerlogin.component.scss']
})
export class MangerloginComponent implements OnInit {
  //定义页面数据渲染常量及变量，用于装载数据返回对应渲染页面
  formArr=[{type:'name',content:'请输入用户名'},{type:'password',content:'请输入用户密码'}];
  modalParams={
    modalShow:false,
    modalTitle:'温馨提示',
    modalContent:''
  };
  //构造器，用于注入其他私用服务模块
  constructor(private router: Router) { }

  ngOnInit() {
  }
  //原生获取el-input组件输入框的值
  awardValue(selector){
    let refvalue=document.querySelector(selector).children[0]['value']
    return refvalue
  }
  GOTOLOGIN(){
    //原生获取dom节点方式为了兼容el-input的封装
    let name=this.awardValue('.name');
    let password=this.awardValue('.password');
    // let {modalTitle,modalContent}=this.modalParams;
    if(Utils.isEmpty(name)){
      this.modalParams.modalShow=true;
      this.modalParams.modalContent='姓名不能为空';
      return
    }
    if(Utils.isEmpty(password)){
      this.modalParams.modalShow=true;
      this.modalParams.modalContent='密码不能为空';
      return
    }
    //路由跳转
    this.router.navigate(['index']);
  }

}
