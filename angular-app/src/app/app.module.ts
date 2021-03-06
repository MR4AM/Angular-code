import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import module
import { ElModule } from 'element-angular';
import 'element-angular/theme/index.css';
import { WeUiModule,LoadmoreModule } from 'ngx-weui';
import { BaiduMapModule } from 'angular2-baidu-map';
// import {SocketioModule} from 'angular-socket-io';
import { NgxEchartsModule } from 'ngx-echarts';
//旧路由组件注入
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { OrderwriteComponent } from './components/orderwrite/orderwrite.component';
import { OrderComponent } from './components/order/order.component';
import { PayComponent } from './components/pay/pay.component';

import {OrderDetailComponent} from './components/order-detail/order-detail.component'
import {RightnavComponent} from './components/common/rightnav/rightnav.component';
import {PopupComponent} from './components/popup/popup.component'

import { RootRouter } from './router/router';
import {StatusPipe } from './pipe/status.pipe'
import {LazyDirective} from './directive/lazy.directive';
import {HttpclientService} from './utils/httpclient.service';
import {ModalService} from './service/modal.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { HostserverComponent } from './components/hostserver/hostserver.component';
import { TestComponent } from './components/test/test.component';
import { IndexComponent } from './manger/index/index.component';
import { MangerloginComponent } from './manger/mangerlogin/mangerlogin.component';
import { EchartsDirective } from './directive/echarts.directive';
import { EchartComponent } from './manger/echart/echart.component'


//组件及模块注入区域
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    OrderwriteComponent,
    OrderComponent,
    PayComponent,
    OrderDetailComponent,
    SpinnerComponent,
    RightnavComponent,
    PopupComponent,
    LazyDirective,
    StatusPipe,
    ModalComponent,
    HostserverComponent,
    TestComponent,
    IndexComponent,
    MangerloginComponent,
    EchartsDirective,
    EchartComponent 
  ],
  imports: [
    BrowserModule,
    RootRouter,
    FormsModule,
    HttpModule,
    // SocketioModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    // WeUiModule.forRoot(),
    NgxEchartsModule,//https://blog.csdn.net/chongchong1325/article/details/76910763 angular2中使用echart
    BaiduMapModule.forRoot({ak:'2QUQ7bVf2yDIuFij5LKAfGzfUndbPsFN'}),
  ],

  providers: [HttpclientService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
