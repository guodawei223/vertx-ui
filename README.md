# Zero UI帮助文档

> _如果说组件是没有生命的驱壳，数据则是灵魂，而我们想要创造的是拥有灵魂的“精灵”。_

## 1. 介绍

Zero UI为[Vert.x Zero Up Framework](http://www.vertxup.cn)的前端脚手架，主要用于和Vert.x Zero Up微服务框架后端进行配合开发，该前端脚手架主要内容如下：

* 使用React, Redux, Rxjs, React-Router和Ant-Design/Ant-Design-Pro为核心库基础
* 使用TypeScript开发视图层以下的模型，React采用ES2017+的注解语法实现无配置的界面开发
* 提供企业系统中常用组件，以及Utility X的包完成通用功能的提取，简化开发人员流程
* 采用Storybook模式通过教程方式告诉开发人员如何使用Zero UI中提供的组件。

该项目中使用了两个项目作为参考Demo，一个项目为通用企业项目，另外一个项目则是Zero Up Framework的后端监控框架，统一采用Zero UI来完成，官方网址：

* Vert.x Zero Up Framework: [http://www.vertxup.cn](http://www.vertxup.cn)
* Zero UI Framework: [http://www.vertxui.cn](http://www.vertxui.cn)

依赖库固定版本（升级后有兼容性问题）

| 库名称 | 当前版本 | 最新版 |
| :--- | :--- | :--- |
| rxjs | 5.5.10 | 6.1.0 |
| webpack | 3.11.0 | 4.6.0 |
| webpack-dev-server | 3.0.0 | 3.1.4 |
| awesome-typescript-loader | 4.0.1 | 5.0.0 |

文档基本前缀说明。

* `UI`文档为开发文档，提供给开发人员使用来开发项目专用；
* `UT`文档为研发文档，提供给研发人员开发Zero UI专用；

## 2. 整体架构

整个Zero框架的结构图如下：

![](/document/image/arch.png)

## 3. 文档列表

### 环境说明

* [UI0001 - 脚手架说明](/document/ui0001-jiao-shou-jia-shuo-ming.md)
* [UI0002 - 环境变量](/document/ui0002-huan-jing-bian-liang.md)
* [UI0003 - 路由/资源文件说明](/document/ui0003-ji-ben-kai-fa-gui-fan.md)
* [UI0007 - 编码规范——文件命名](/document/ui0007-jiao-shou-jia-tui-jian-bian-ma-gui-fan.md)
* [UI0008 - 编码规范——代码约定](/document/ui0008-bian-ma-gui-fan-2014-2014-dai-ma-yue-ding.md)
* [UI0006 - 模板/组件规范示例](/document/ui0006-mo-677f-zu-jian-kai-fa-gui-fan.md)

### 开发文档

* [UI0009 - StateIn中的r系列API](/document/2-kai-fa-wen-dang/ui0009-stateinzhong-de-r-xi-lie-api.md)
* [UI0010 - zero注解](/document/2-kai-fa-wen-dang/ui0010-zerozhu-jie.md)
* [UI0011 - TypeScript数据模型](/document/2-kai-fa-wen-dang/ui0011-typescriptshu-ju-mo-xing.md)
* [UI0013 - 页面代码结构说明](/document/2-kai-fa-wen-dang/ui0013-ye-mian-dai-ma-jie-gou-shuo-ming.md)
* [UI0016 - Form的复杂布局（Grid）](/document/2-kai-fa-wen-dang/ui0016-formde-fu-za-bu-ju-ff08-grid.md)
* [UI0015 - Form中的字段验证](/document/2-kai-fa-wen-dang/ui0015-formzhong-de-zi-duan-yan-zheng.md)

### 步步为营

* [UI0012 - 路由测试](/document/ui0012-lu-you-ce-shi.md)
* [UI0004 - 开发第一个模板](/document/ui0004-kai-fa-di-yi-ge-mo-ban.md)
* [UI0005 - 开发第一个页面](/document/ui0005-kai-fa-di-yi-ge-ye-mian.md)
* [UI0014 - 开发提交按钮事件](/document/ui0014-kai-fa-ti-jiao-an-niu-shi-jian.md)

### Ux工具包

参考UT0001，运行脚本`run-doc.sh`，则可以从浏览器查看文档：[http://localhost:5000/](http://localhost:5000/)

### 脚手架解析

* [UT0001 - yuidoc工具生成API文档](/document/3-jiao-shou-jia-jie-xi/ut0001-yuidocgong-ju-sheng-cheng-api-wen-dang.md)
* [UT0002 - storybook可重用组件文档](/document/3-jiao-shou-jia-jie-xi/ut0002-storybookke-zhong-yong-zu-jian-wen-dang.md)



