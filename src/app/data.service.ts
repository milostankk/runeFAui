import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {mockData, rss, symbolGrid} from "./mock-data";
import {SymbolDp} from "./symbolDp";

@Injectable()
export class DataService {

    constructor() {
    }

    getData(): Observable<object[]> {
        return of(mockData);
    }

    getRss(): Observable<SymbolDp[]> {
        return of(rss);
    }

    getSymbolGrid(): Observable<object[]> {
        return of(symbolGrid)
    }

}
