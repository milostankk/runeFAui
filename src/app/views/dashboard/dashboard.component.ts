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

    groups: GroupViewModel[];
    groupContent: string[];
    subgroups: GroupViewModel[];
    date;
    minDate;
    dropDownSelection: string;
    group: Group;
    groupContainer: GroupContainer;

    constructor(private groupService: GroupService, private router: Router) {
    }

    groupClicked(e) {
        this.groupContainer = new GroupContainer();
        this.groupContainer.group = new Group();
        this.groupContainer.group.name = e.name;
        this.groupContent = e.values;
        const index = this.getGroupIndex(e.name);
        this.setSubgroups(index);
        if (e.values.length < 1) {
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
        this.groupContainer.subgroup.name = e.name;
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
    }

    getGroupIndex(group: string): number {
        return this.groups.map(function (x) {
            return x.name;
        }).indexOf(group);
    }

    setGroups(): void {
        this.groupService.getGroups().subscribe(groups => this.groups = groups.slice(0, groups.length - 1));
    }

    setSubgroups(index: number): void {
        this.groupService.getGroups().subscribe(groups => this.subgroups = groups.slice(index + 1, groups.length));
    }


    ngOnInit() {
        this.setGroups();
    }

}
