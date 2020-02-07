import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts/lib/echarts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  chartOption: EChartOption;
  mapOption: EChartOption;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initMap();
    // this.testChart();
  }
  testChart() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }, yAxis: {
        type: 'value'
      }, series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
  }

  initMap() {

    this.http.get('assets/map/china.json')
      .subscribe(geoJson => {
        echarts.registerMap('China', geoJson);
        this.mapOption = {

          backgroundColor: '#96aec7',
          title: {
            text: '新型冠状病毒全国分布图',
            subtext: '数据来自央视频疫情二十四小时',
            sublink: 'https://m.yangshipin.cn/static/2020/c0126.html?ptag=4_1.1.1.20239_wxf&tab=news_list'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} '
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            min: 0,
            max: 50,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#ADCDEF', '#2171C1']
            }
          },
          series: [
            {
              name: "",
              type: 'map',
              mapType: 'China',  //  与注册时的名字保持统一   echarts.registerMap('China', geoJson);
              itemStyle: {
                normal: {
                  areaColor: '#AAD5FF',
                  borderColor: 'white',
                  label: { show: true, color: 'white' }
                },
                emphasis: {
                  areaColor: '#A5DABB'
                }
              },
              zoom: 1.2,
              data: [
                { name: '北京', value: 0 },
                { name: '天津', value: 0 },
                { name: '重庆', value: 0 },
                { name: '上海', value: 0 },
                { name: '湖南', value: 0 },
                { name: '广东', value: 20 },
                { name: '福建', value: 0 },
                { name: '江西', value: 0 },
                { name: '四川', value: 0 },
                { name: '广西', value: 0 },
                { name: '新疆', value: 0 },
                { name: '西藏', value: 0 },
                { name: '青海', value: 0 },
                { name: '甘肃', value: 0 },
                { name: '宁夏', value: 0 },
                { name: '内蒙古', value: 0 },
                { name: '海南', value: 0 },
                { name: '山西', value: 0 },
                { name: '陕西', value: 0 },
                { name: '云南', value: 0 },
                { name: '贵州', value: 0 },
                { name: '湖北', value: 0 },
                { name: '浙江', value: 0 },
                { name: '安徽', value: 0 },
                { name: '河南', value: 0 },
                { name: '山东', value: 0 },
                { name: '江苏', value: 0 },
                { name: '河北', value: 0 },
                { name: '辽宁', value: 0 },
                { name: '吉林', value: 0 },
                { name: '黑龙江', value: 0 },
                { name: '台湾', value: 0 }]
            }
          ]
        };
      });
  }

}
