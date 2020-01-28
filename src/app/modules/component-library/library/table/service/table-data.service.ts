import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  url = 'https://raw.githubusercontent.com/epsilon-ux/blueprint-ui/master/src/app/modules/component-library/library/table/tableData.json';
  constructor(private https: HttpClient) { }

  get_cuData(): Observable<HttpResponse<any>> {
    return this.https.get<HttpResponse<any>>(this.url, { observe: 'response' });
  }

}
