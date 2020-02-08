import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }


  getChinaGeoJson() {
    return this.http.get('assets/map/china.json').toPromise();;
  }

  getLocalCounts() {
    return this.http.get('assets/map/area_counts.json').toPromise();;
  }

  getWebCounts() {
    let url = `https://sapi.yangshipin.cn/api/x/cctv/area_counts.json?date=${new Date().getTime()}`;
    return this.http.get(url).toPromise();
  }

  getAutoCounts() {
    return this.getWebCounts().catch(
      error => {
        return this.getLocalCounts().catch(error => {
          console.log("获取本地数据失败");
        }).then(res => {
          return res;
        })
      }).then(res => {
        return res;
      }
    )

  }

}
