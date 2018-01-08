import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class DataService {

    rootUrl = 'http://71.183.236.12:8080/RuneFa.JanusWebApiServer/api';

    constructor(private http: HttpClient) {
    }

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
            queryParams = queryParams.append('date', date);
        }
        return this.http.get(this.rootUrl + '/GetSymbolGrid', {params: queryParams});
    }

    getChart(endPoint, superName, from?, to?, optional?) {
        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (from) {
            queryParams = queryParams.append('from', from);
        }
        if (to) {
            queryParams = queryParams.append('to', to);
        }
        if (optional) {
            queryParams = queryParams.append(optional.param, optional.value)
        }

        return this.http.get(this.rootUrl + endPoint, {params: queryParams});
    }

    downloadSymbolGrid(superName, date?) {
        //  const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});

        let queryParams: HttpParams = new HttpParams();
        queryParams = queryParams.append('super', superName);
        if (date) {
            queryParams = queryParams.append('date', date);
        }
        return this.http.get(this.rootUrl + '/DownloadSymbolGrid', {params: queryParams, responseType: 'blob'});
    }

}
