# echarts相关
## npm 安装ngx-echarts及相关的依赖
### if you use npm
```Bash
npm install echarts -S
npm install ngx-echarts -S
npm install @types/echarts -D
```
### or if you use yarn
```Bash
yarn add echarts
yarn add ngx-echarts
yarn add @types/echarts -D
```
 
## AppModule引入NgxEchartsModule
```ts
import { NgxEchartsModule } from 'ngx-echarts';
  
@NgModule({
 imports: [
  ...,
  NgxEchartsModule
 ],
 ...
})
export class AppModule { }
```

## 使用echarts
```html
<div echarts [options]="chartOption"></div>
```
 
 # 测试相关[https://blog.csdn.net/wf19930209/article/details/80413904]
 ## 单元测试
 ### 基础
    jasmine-core:Jasmine是我们将用来创建测试的框架。它有许多功能可以让我们编写不同类型的测试。
    karma:Karma是我们测试的任务跑步者。它使用配置文件来设置启动文件，报告，测试框架，浏览器等等。

    TestBed：TestBed对象会编译模块和组件
 ### 测试函数说明
     describe:表示一个测试套件/测试集（suite)
     it:表示一个每个测试用例

        每个测试用例内包括多个 断言（expectation） 来测试需要测试的代码，只要任何一个 expectation 结果为 false 就表示该测试用例为失败状态。

     expect：断言
     
        常用断言方法
        toBe() 等同 ===
        toNotBe() 等同 !==
        toBeDefined() 等同 !== undefined
        toBeUndefined() 等同 === undefined
        toBeNull() 等同 === null
        toBeTruthy() 等同 !!obj
        toBeFalsy() 等同 !obj
        toBeLessThan() 等同 <
        toBeGreaterThan() 等同 >
        toEqual() 相当于 ==
        toNotEqual() 相当于 !=
        toContain() 相当于 indexOf
        toBeCloseTo() 数值比较时定义精度，先四舍五入后再比较。
        toHaveBeenCalled() 检查function是否被调用过
        toHaveBeenCalledWith() 检查传入参数是否被作为参数调用过
        toMatch() 等同 new RegExp().test()
        toNotMatch() 等同 !new RegExp().test()
        toThrow() 检查function是否会抛出一个错误


     beforeEach:测试套件中所有测试用例开始之前统一操作
     afterEach:测试套件中所有测试用例开始之前统一操作
     beforeAll 
     afterAll 

     async：异步的目的是让所有可能的异步代码在继续之前完成？？？

### 执行测试命令
```
ng test 
```
ng test的常用参数. 
- –code-coverage -cc 代码覆盖率报告, 默认这个是不开启的, 因为生成报告的速度还是比较慢的. 
- –colors 输出结果使用各种颜色 默认开启 
- –single-run -sr 执行测试, 但是不检测文件变化 默认不开启 
- –progress 把测试的过程输出到控制台 默认开启 
- –sourcemaps -sm 生成sourcemaps 默认开启 
- –watch -w 运行测试一次, 并且检测变化 默认开启

 ## 集成测试
