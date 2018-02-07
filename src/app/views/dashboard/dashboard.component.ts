import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {GroupViewModel} from '../../groupViewModel';
import {GroupContainer} from '../../groupContainer';
import {Group} from '../../group';
import {DataService} from '../../data.service';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    date;
    minDate;
    dropDownSelection = 'Select';
    groups = ['All', 'Index', 'Sector', 'Symbol'];
    grouping = [];
    subgrouping = [];
    dataReady = false;
    // NEW CODE
    selectedGroup = '';
    selectedFromDate: string;
    selectedToDate: string;
    selectedGroupType: string;
    // NEW CODE ENDED

    content: string[];


    constructor(private groupService: GroupService, private dataService: DataService, private router: Router) {
    }

    // NEW CODE
    isDataReady() {
        this.groupService.isDataReady().subscribe(
            data => {
                this.dataReady = data;
                if (!this.dataReady) {
                    this.router.navigateByUrl('/dataNotReady');
                }
            }, error2 => alert(error2.message))
    }

    selectGroup(gName) {
        this.setContext(gName);
        this.selectedGroup = gName;
        this.selectedGroupType = gName;
        this.dropDownSelection = 'Select';
    }

    showDates(): boolean {
        return this.selectedGroup ? !(this.selectedGroup === 'Index' || this.selectedGroup === 'Sector') : false;
    }

    selectDateFrom(e) {
        this.selectedFromDate = new Date(e.year, e.month - 1, e.day).toISOString();
        this.minDate = e;
    }

    selectDateTo(e) {
        this.selectedToDate = new Date(e.year, e.month - 1, e.day).toISOString();
    }

    post() {
        this.router.navigateByUrl('/dataDisplay');
        sessionStorage.setItem('super', this.selectedGroup);
        sessionStorage.setItem('superType', this.selectedGroupType);
        if (this.selectedFromDate) {
            sessionStorage.setItem('from', this.selectedFromDate)
        }
        if (this.selectedToDate) {
            sessionStorage.setItem('to', this.selectedToDate)
        }
    }

    setGroupings(): void {
        this.grouping = this.groups.slice(0, this.groups.length - 1);
    }

    setSubgrouping(index: number): void {
        this.subgrouping = this.groups.slice(index + 1, this.groups.length)
    }

    setContext(group: string): void {
        if (group === 'Index') {
            this.groupService.getIndices().subscribe(content => this.content = content);
        } else if (group === 'Sector') {
            this.groupService.getSectors().subscribe(content => this.content = content);
        } else {
            return;
        }
    }

    ngOnInit() {
        sessionStorage.clear();
        this.isDataReady();
        this.setGroupings();
    }


    // NEW CODE ENDED
}
