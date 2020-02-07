import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import {NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MapComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MapRoutingModule,
    NgxEchartsModule 
  ]
})
export class MapModule { }
