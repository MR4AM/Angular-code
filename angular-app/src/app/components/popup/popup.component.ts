import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
    @Output() isCancel = new EventEmitter<boolean>();
    constructor() { }
    
    ngOnInit() {
    }
    popupClick(flag:boolean){
        this.isCancel.emit(flag);
    }
}
