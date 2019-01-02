import { Injectable } from '@angular/core';

//定义服务类，管理数据及工具状态，可在组件内部单独提供服务成私用工具使用
@Injectable()
export class ModalService {
  modalstate:boolean=false;
  constructor() { }
}
