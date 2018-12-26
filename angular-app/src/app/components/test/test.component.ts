import { Component, OnInit } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public opts: MapOptions;
  constructor() {
    this.opts = {
      centerAndZoom: {
          lng:113.269459,//经度
          lat: 23.15635,//纬度
          zoom: 12,//缩放比
      },
      enableHighResolution:true,
      disableDoubleClickZoom:false,
      disablePinchToZoom:false
  };
  }

  ngOnInit() {
  }

}
