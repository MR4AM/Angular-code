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
import {EchartComponent} from '../manger/echart/echart.component';

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
    // 这个指令在本地引入Echarts库，在AOT编译的时候，项目会将Echarts包合并到核心js文件中，
    //在这个例子中由于Chart组件和EchartsOption指令注册在了AppModule根模块应用中，当初次请求页面时，包含有Echarts内容的js文件会被加载进来，但是如果初始页面中没有运用到Echarts功能，那加载进来的Echarts内容就是多余的了，这会加重前端性能负担。
    //像这样的情况，可以利用Chart组件和EchartsOption指令构造一个模块EchartsModule，项目在AOT的时候只会将和该模块相关的js合并成一个js文件，当浏览器初始时候下载js文件时就不会将Echarts内容下载下来，减少网页加载的时间。
    //当用户点击想要查看Echarts功能时，项目会根据上面的路由信息找到对应的EchartsModule，从而加载Echarts功能相关的js文件，然后将Echarts功能组件反应到页面上，这就是按需加载模式。这种模式在体积越来越大，功能越来越多，对性能要求越来越高的WebApp上
    //应用越来越重要。
    { path: 'echart', component: EchartComponent,loadChildren:''},
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    { enableTracing:false }
)