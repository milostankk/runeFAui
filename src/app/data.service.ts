import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {mockData, rss, symbolGrid} from "./mock-data";
import {SymbolDp} from "./symbolDp";
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class DataService {

    rootUrl = 'http://localhost/RuneFa.JanusWebApiServer/api';

    constructor(private http: HttpClient) {
    }




    getData(): Observable<object[]> {
        return of(mockData);
    }

    // getRss(): Observable<SymbolDp[]> {
    //     return of(rss);
    // }

    getRss(superName: string, from?, to?) {
        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (from) {
            queryParams = queryParams.append('from', from.toString());
        }
        if (to) {
            queryParams = queryParams.append('to', to.toString());
        }

        return this.http.get(this.rootUrl + '/GetRss', {params: queryParams});
    }

    getSymbolGrid(): Observable<object[]> {
        return of(symbolGrid)
    }

}
