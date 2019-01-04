#angualr 官网：https://www.angular.cn/ markdown https://www.jianshu.com/p/191d1e21f7ed
# 基于Angular搭建的前端组件化市场
## angular安装搭建
### npm install -g @angular/cli
## 创建项目目录
### ng new angualr-app
## 运行项目创建运行服务
### ng serve --open

## 自动生成组件，到指定组件目录下下执行以下命令
- ng generate component component-name
### 常用命令集合 https://blog.csdn.net/u011127019/article/details/79114886

## Angular 2 指令生命周期钩子的作用及调用顺序 
### https://www.jianshu.com/p/a2f1d54097f8
### 基于指令与组件的区别来分类:
- 1、指令与组件共有的钩子：
- ngOnChanges
- ngOnInit
- ngDoCheck
- ngOnDestroy
- 2、组件特有的钩子
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked

### 生命周期顺序
- 1、ngOnChanges - 当数据绑定输入属性的值发生变化时调用
- 2、ngOnInit - 在第一次 ngOnChanges 后调用
- 3、ngDoCheck - 自定义的方法，用于检测和处理值的改变
- 4、ngAfterContentInit - 在组件内容初始化之后调用
- 5、ngAfterContentChecked - 组件每次检查内容时调用
- 6、ngAfterViewInit - 组件相应的视图初始化之后调用
- 7、ngAfterViewChecked - 组件每次检查视图时调用
- 8、ngOnDestroy - 指令销毁前调用



