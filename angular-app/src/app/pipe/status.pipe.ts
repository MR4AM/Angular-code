import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {

    transform(value: any, args?: any):String {
        if(value == 0){
            value = '待支付';
        }else if(value == 1){
            value = '已支付';
        }else if(value == -1){
            value = '已取消';
        }
        return value;
    }

}
