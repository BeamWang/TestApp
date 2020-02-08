# echart相关
## npm 安装ngx-echarts及相关的依赖
### if you use npm
```cmd
npm install echarts -S
npm install ngx-echarts -S
npm install @types/echarts -D
```
### or if you use yarn
```cmd
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
 
