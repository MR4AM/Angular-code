import { Component, OnInit } from '@angular/core';
const topNav=[
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]}
]
const leftNav=[
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]},
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]},
  {"item":"管理中心","children":[]},
  {"item":"我的工作台","children":[{"item":"选项一"},{"item":"选项二"},{"item":"选项三"}]},
  {"item":"权限管理","children":[]}
]
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  topNav=topNav;
  leftNav=leftNav;
  constructor() { }

  ngOnInit() {
  }

}
