import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[fk]'
})

export class LazyDirective {
    constructor(el: ElementRef) {
    	var img = el.nativeElement;
    	img.onload = function(){
    		this.setAttribute("src",img.dataset.img);
    	}
    }
}