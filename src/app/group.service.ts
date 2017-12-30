import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {mockGroups, mockIndicies, mockSectors} from './mock-data';
import {GroupViewModel} from './groupViewModel';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GroupService {


    rootUrl = 'http://192.168.1.99/RuneFa.JanusWebApiServer/api';

    constructor(private http: HttpClient) {
    }

    getGroups(): Observable<GroupViewModel[]> {
        return of(mockGroups);
    }
    //
    // getIndicies(): Observable<string[]> {
    //     return of(mockIndicies);
    // }


    // getSectors(): Observable<string[]> {
    //     return of(mockSectors);
    // }

    // Checking if data is ready for displaying

    isDataReady(): Observable<any> {
        return this.http.get(this.rootUrl + '/IsDataReady');
    }

    getIndices(): Observable<string[]> {
        return this.http.get<string[]>(this.rootUrl.concat('/GetIndexNames'));
    }

    getSectors(): Observable<string[]> {
        return this.http.get<string[]>(this.rootUrl.concat('/GetSectorNames'));
    }


}
