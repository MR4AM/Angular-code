import { Directive,ElementRef,Input,OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'echart'
})
//angular 2使用echarts https://www.cnblogs.com/zhutao/p/7827589.html
export class EchartsDirective implements OnInit {
  @Input('chartType') chartType :any;
  constructor(private el:ElementRef) { }
  public ngOnInit(){
    echarts.init(this.el.nativeElement).setOption(this.chartType);
  }
}
