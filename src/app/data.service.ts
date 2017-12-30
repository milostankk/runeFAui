import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
// import {mockData, rss, symbolGrid} from "./mock-data";
// import {SymbolDp} from "./symbolDp";
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class DataService {

    rootUrl = 'http://localhost/RuneFa.JanusWebApiServer/api';

    constructor(private http: HttpClient) {
    }




    // getData(): Observable<object[]> {
    //     return of(mockData);
    // }

    // getRss(): Observable<SymbolDp[]> {
    //     return of(rss);
    // }

    getRss(superName: string, from?, to?) {
        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (from) {
            queryParams = queryParams.append('from', from);
        }
        if (to) {
            queryParams = queryParams.append('to', to);
        }

        return this.http.get(this.rootUrl + '/GetRss', {params: queryParams});
    }

    getDomDoe(superName: string, from?, to?) {
        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (from) {
            queryParams = queryParams.append('from', from);
        }
        if (to) {
            queryParams = queryParams.append('to', to);
        }

        return this.http.get(this.rootUrl + '/GetDomDoe', {params: queryParams});
    }

    getRsStrongRsWeak(superName: string, from?, to?) {
        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (from) {
            queryParams = queryParams.append('from', from);
        }
        if (to) {
            queryParams = queryParams.append('to', to);
        }

        return this.http.get(this.rootUrl + '/GetRsStrongRsWeak', {params: queryParams});
    }

    getSymbolGrid(superName, date?) {
        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (date) {
            queryParams = queryParams.append('from', date);
        }
        return this.http.get(this.rootUrl + '/GetSymbolGrid', {params: queryParams});
    }

}
