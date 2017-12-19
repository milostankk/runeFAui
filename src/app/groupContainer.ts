import {Group} from './group';

export class GroupContainer {
    group: Group = new Group();
    subgroup: Group = this.group.subgroup;
    dateFrom: Date;
    dateTo: Date;

};



