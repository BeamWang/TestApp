import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts/lib/echarts';
import { MapService } from '../services/map.service';
import { AreaCctv, AreaCctvItem } from '../entities/area-cctv';
import { AreaItem } from '../entities/area-item';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  chartOption: EChartOption;
  mapOption: EChartOption;
  data:AreaCctv;
  chinaDatas:AreaCctvItem[]=[];
  

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit(): void {
    this.mapService.getAutoCounts().then((data: AreaCctv) => {
      this.data=data;
      this.initMap(data);
    });
  }
  formatChinaData(areaTree: AreaCctvItem[]): any {
    let formatValue: AreaItem[] = [];
    areaTree.forEach(areaCctvItem => {
      if (areaCctvItem.name === '中国') {
        areaCctvItem.children.forEach(cityItem => {
          this.chinaDatas.push(cityItem);
          formatValue.push(new AreaItem(cityItem.name, cityItem.total.confirm));
        });
      }
    });

    return formatValue;
  }

  initMap(data:AreaCctv) {
    this.mapService.getChinaGeoJson()
      .then(geoJson => {
        echarts.registerMap('China', geoJson);
        this.mapOption = {
          backgroundColor:'#D2E4E8',
          title: {
            text: '新型冠状病毒全国分布图',
            subtext: '数据来自央视频疫情二十四小时,最新时间：'+data.lastUpdateTime,
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
          // visualMap: {
          //   min: 0,
          //   max: 50,
          //   text: ['High', 'Low'],
          //   realtime: false,
          //   calculable: true,
          //   inRange: {
          //     color: ['#ADCDEF', '#2171C1']
          //   }
          // },
          visualMap: {
            x: 'left',
            y: 'bottom',
            splitList: [
              { start: 10000, label: '>10000人以上', color: '#660000' },
              { start: 1000, end: 9999, label: '1000-10000人', color: '#AA0000' },
              { start: 100, end: 999, label: '100-1000人', color: '#D73E18' },
              { start: 10, end: 99, label: '10-99人', color: '#ED7457' },
              { start: 1, end: 9, label: '1-9人', color: '#84bf96' },
              { start: 0, end: 0, label: '0人', color: '#fff' }
            ]
          },
          series: [
            {
              name: "",
              type: 'map',
              mapType: 'China',  //  与注册时的名字保持统一   echarts.registerMap('China', geoJson);
              itemStyle: {
                normal: {
                  areaColor: '#AAD5FF',
                  borderColor: '#ccc',
                  label: { show: true, color: 'white' }
                },
                emphasis: {
                  areaColor: '#A5DABB'
                }
              },
              zoom: 1.2,
              data: this.formatChinaData(data.areaTree)
            }
          ]
        };
      });
  }

}
