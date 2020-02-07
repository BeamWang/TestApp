1. npm 安装ngx-echarts及相关的依赖
# if you use npm
npm install echarts -S
npm install ngx-echarts -S
npm install @types/echarts -D

# or if you use yarn
yarn add echarts
yarn add ngx-echarts
yarn add @types/echarts -D

 
3. AppModule引入NgxEchartsModule
import { NgxEchartsModule } from 'ngx-echarts';
  
@NgModule({
 imports: [
  ...,
  NgxEchartsModule
 ],
 ...
})
export class AppModule { }

4.使用echarts
<div echarts [options]="chartOption"></div>
 
