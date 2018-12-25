import {Directive, ElementRef} from '@angular/core';

//自定义指令，@Directive修饰符确定指令的作用域
@Directive({
    selector: '[fk]'
})

//定义指令的具体逻辑
export class LazyDirective {
    constructor(el: ElementRef) {
    	var img = el.nativeElement;
    	img.onload = function(){
    		this.setAttribute("src",img.dataset.img);
    	}
    }
}