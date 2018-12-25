import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/details/details.component';
import { LoginComponent } from '../components/login/login.component';
import { OrderwriteComponent } from '../components/orderwrite/orderwrite.component';
import { OrderComponent } from '../components/order/order.component';
import { PayComponent } from '../components/pay/pay.component';
import {OrderDetailComponent} from '../components/order-detail/order-detail.component'
import {HostserverComponent} from '../components/hostserver/hostserver.component'

const appRoutes : Routes = [
    { path: '' ,redirectTo: 'home',pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'list/:city', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'orderwrite/:id', component: OrderwriteComponent },
    { path: 'order', component: OrderComponent },
    { path: 'pay/:encode', component: PayComponent },
    { path: 'orderdetail/:encode', component: OrderDetailComponent },
    { path: 'hostserver', component: HostserverComponent },
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing:false }
)