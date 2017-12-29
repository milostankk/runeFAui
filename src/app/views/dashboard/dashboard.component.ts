import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GroupService} from '../../group.service';
import {GroupViewModel} from '../../groupViewModel';
import {GroupContainer} from '../../groupContainer';
import {Group} from '../../group';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

   // groups: GroupViewModel[];
   //  groupContent: string[];
    subgroups: GroupViewModel[];
    date;
    minDate;
    dropDownSelection: string;
    group: Group;
    groupContainer: GroupContainer;
    groups = ['All', 'Index', 'Sector', 'Symbol'];
    grouping = [];
    subgrouping = [];


    content: string[];


    constructor(private groupService: GroupService, private router: Router) {
    }

    groupClicked(e) {
        this.content = null;
        this.groupContainer = new GroupContainer();
        this.groupContainer.group = new Group();
        this.groupContainer.group.name = e;
        this.setContext(e);
        const index = this.getGroupIndex(e);
        this.setSubgrouping(index);
        if (e === 'All') {
            this.groupContainer.subgroup = new Group();
        }
        this.dropDownSelection = 'Select';
    }

    groupChanged(e) {
        this.groupContainer.group.content = e;
        this.groupContainer.subgroup = new Group();
        this.dropDownSelection = e;
    }

    subgroupClicked(e) {
        this.groupContainer.subgroup.name = e;
    }

    dateFromChanged(e) {
        this.groupContainer.dateFrom = new Date(e.year, e.month - 1, e.day);
        this.minDate = e;
    }

    dateToChanged(e) {
        this.groupContainer.dateTo = new Date(e.year, e.month - 1, e.day);
    }

    groupsSelectionDone(e) {
        console.log(this.groupContainer);
         this.router.navigate(['../dataDisplay']);
      //   this.location.replace('../dataDisplay');
    }

    getGroupIndex(group: string): number {
        return this.grouping.map(function (x) {
            return x;
        }).indexOf(group);
    }

   /* setGroups(): void {
        this.groupService.getGroups().subscribe(groups => this.groups = groups.slice(0, groups.length - 1));
    }*/

   setGroupings(): void {
       this.grouping = this.groups.slice(0, this.groups.length - 1);
   }

   setSubgrouping(index: number): void{
       this.subgrouping = this.groups.slice(index + 1, this.groups.length)
   }

    setSubgroups(index: number): void {
        this.groupService.getGroups().subscribe(groups => this.subgroups = groups.slice(index + 1, groups.length));
    }

    setContext(group: string): void {
        if (group === 'Index') {
            this.groupService.getIndicies().subscribe(content => this.content = content);
        } else if (group === 'Sector') {
            this.groupService.getSectors().subscribe(content => this.content = content);
        } else { return; }
    }

    ngOnInit() {
        this.setGroupings();
    }

}
