import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { MapService } from '../services/map.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

/** describe 表示分组类似测试套，也就是一组测试用例，支持description嵌套
 * 
 */
describe('MapComponent套件', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports:[
        CommonModule,
        HttpClientModule,
        NgxEchartsModule 
      ],
      providers:[MapService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('创建实例', () => {
    expect(component).toBeTruthy();
  });

  it('正确引用MapService', () => {
    expect(component).toBeTruthy();
  });


});
