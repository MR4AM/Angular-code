import { Component, OnInit,DoCheck } from '@angular/core';
import {ModalService} from '../../service/modal.service'
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,DoCheck {

  constructor(private modalservice:ModalService) { }
  state:boolean;
  ngOnInit() {
      this.state=this.modalservice.modalstate;
  }
  changeState(){
      this.modalservice.modalstate=!this.modalservice.modalstate;
  }
  ngDoCheck(){
      this.state=this.modalservice.modalstate;
  }


}
