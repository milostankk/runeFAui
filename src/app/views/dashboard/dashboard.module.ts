import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GroupService} from '../../group.service';

@NgModule({
    imports: [
        DashboardRoutingModule,
        ChartsModule,
        NgbModule.forRoot(),
        CommonModule,
        FormsModule
    ],
    declarations: [DashboardComponent],
    providers: [GroupService]
})
export class DashboardModule {
}
