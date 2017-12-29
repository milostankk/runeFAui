import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {mockGroups, mockIndicies, mockSectors} from './mock-data';
import {GroupViewModel} from './groupViewModel';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GroupService {


    rootUrl = 'http://localhost:64002/api';

    constructor(private http: HttpClient) {
    }

    getGroups(): Observable<GroupViewModel[]> {
        return of(mockGroups);
    }

    getIndicies(): Observable<string[]> {
        return of(mockIndicies);
    }


    getSectors(): Observable<string[]> {
        return of(mockSectors);
    }

   /* getIndices(): Observable<string[]> {
        return this.http.get<string[]>(this.rootUrl.concat('/GetIndexNames'));
    }*/
}
