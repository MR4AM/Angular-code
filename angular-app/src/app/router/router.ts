import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/details/details.component';
import { LoginComponent } from '../components/login/login.component';
import { OrderwriteComponent } from '../components/orderwrite/orderwrite.component';
import { OrderComponent } from '../components/order/order.component';
import { PayComponent } from '../components/pay/pay.component';
import {OrderDetailComponent} from '../components/order-detail/order-detail.component';
import {HostserverComponent} from '../components/hostserver/hostserver.component';
import {TestComponent} from '../components/test/test.component';
import {IndexComponent} from '../manger/index/index.component';
import {MangerloginComponent} from '../manger/mangerlogin/mangerlogin.component';

const ROUTETYPE='MANGER';//定义路由为管理后台的路由
//定义路由,对应路由渲染组件
if(ROUTETYPE=='MANGER'){
    const appRoutes : Routes = [
        //管理后台路由
        { path: '' ,redirectTo: 'index',pathMatch:'full'},
    ]
}else{
   
}
const appRoutes : Routes = [
    //旧路由
    // { path: '' ,redirectTo: 'home',pathMatch:'full'},
    // { path: 'home', component: HomeComponent },
    // { path: 'list/:city', component: ListComponent },
    // { path: 'detail/:id', component: DetailComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'orderwrite/:id', component: OrderwriteComponent },
    // { path: 'order', component: OrderComponent },
    // { path: 'pay/:encode', component: PayComponent },
    // { path: 'orderdetail/:encode', component: OrderDetailComponent },
    // { path: 'hostserver', component: HostserverComponent },
    // { path: 'test', component: TestComponent },
    //管理后台路由
    { path: '' ,redirectTo: 'index',pathMatch:'full'},
    { path: 'index', component: IndexComponent },
    { path: 'mangerlogin', component: MangerloginComponent},
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing:false }
)