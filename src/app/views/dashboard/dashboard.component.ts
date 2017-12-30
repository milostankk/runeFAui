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

   // groups: GroupViewModel[];
   //  groupContent: string[];
    subgroups: GroupViewModel[];
    date;
    minDate;
    dropDownSelection = 'Select';
    group: Group;
    groupContainer: GroupContainer;
    groups = ['All', 'Index', 'Sector', 'Symbol'];
    grouping = [];
    subgrouping = [];
    dataReady = true;
    // NEW CODE
    selectedGroup = '';
    selectedFromDate: string;
    selectedToDate: string;
    // NEW CODE ENDED

    content: string[];


    constructor(private groupService: GroupService, private dataService: DataService, private router: Router) {
    }

    // NEW CODE
    selectGroup(gName) {
        this.setContext(gName);
        this.selectedGroup = gName;
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
        if (this.selectedFromDate) {sessionStorage.setItem('from', this.selectedFromDate)}
        if (this.selectedToDate) {sessionStorage.setItem('to', this.selectedToDate)}
    }



    // NEW CODE ENDED

    // groupClicked(e) {
    //     this.content = null;
    //     this.groupContainer = new GroupContainer();
    //     this.groupContainer.group = new Group();
    //     this.groupContainer.group.name = e;
    //     this.selectedGroup = e;
    //     this.setContext(e);
    //     const index = this.getGroupIndex(e);
    //     this.setSubgrouping(index);
    //     if (e === 'All') {
    //         this.groupContainer.subgroup = new Group();
    //     }
    //     this.dropDownSelection = 'Select';
    // }
    //
    // groupChanged(e) {
    //     this.groupContainer.group.content = e;
    //     this.groupContainer.subgroup = new Group();
    //     this.dropDownSelection = e;
    //     this.selectedGroup = e;
    // }
    //
    // subgroupClicked(e) {
    //     this.groupContainer.subgroup.name = e;
    // }
    //
    // dateFromChanged(e) {
    //     this.groupContainer.dateFrom = new Date(e.year, e.month - 1, e.day);
    //     this.minDate = e;
    // }
    //
    // dateToChanged(e) {
    //     this.groupContainer.dateTo = new Date(e.year, e.month - 1, e.day);
    // }

    groupsSelectionDone(e) {
        console.log(this.groupContainer);
         this.router.navigate(['../dataDisplay']);
         sessionStorage.setItem('super', this.selectedGroup);
        if (this.groupContainer.dateFrom) {sessionStorage.setItem('from', this.groupContainer.dateFrom.toISOString())}
        if (this.groupContainer.dateTo) {sessionStorage.setItem('to', this.groupContainer.dateTo.toISOString())}
    }

    getGroupIndex(group: string): number {
        return this.grouping.map(function (x) {
            return x;
        }).indexOf(group);
    }

    isDataReady()  {
        this.groupService.isDataReady().subscribe(data => {this.dataReady = data; if (!this.dataReady) {alert('Data is being generated. Refresh the page in several minutes and try again.'); }}, error2 => alert(error2.message))
    }

   /* setGroups(): void {
        this.groupService.getGroups().subscribe(groups => this.groups = groups.slice(0, groups.length - 1));
    }*/

   setGroupings(): void {
       this.grouping = this.groups.slice(0, this.groups.length - 1);
   }

   setSubgrouping(index: number): void {
       this.subgrouping = this.groups.slice(index + 1, this.groups.length)
   }

    // setSubgroups(index: number): void {
    //     this.groupService.getGroups().subscribe(groups => this.subgroups = groups.slice(index + 1, groups.length));
    // }

    setContext(group: string): void {
        if (group === 'Index') {
            this.groupService.getIndices().subscribe(content => this.content = content);
        } else if (group === 'Sector') {
            this.groupService.getSectors().subscribe(content => this.content = content);
        } else { return; }
    }

    ngOnInit() {
       sessionStorage.clear();
        this.isDataReady();
        this.setGroupings();
    }

}
