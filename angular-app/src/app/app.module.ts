import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeUiModule,LoadmoreModule } from 'ngx-weui';
import { BaiduMapModule } from 'angular2-baidu-map';


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
import { HostserverComponent } from './components/hostserver/hostserver.component'


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
    HostserverComponent 
  ],
  imports: [
    BrowserModule,
    RootRouter,
    FormsModule,
    HttpModule,
    WeUiModule.forRoot(),
    BaiduMapModule.forRoot({ak:'2QUQ7bVf2yDIuFij5LKAfGzfUndbPsFN'}),
  ],

  providers: [HttpclientService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
