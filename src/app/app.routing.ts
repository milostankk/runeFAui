import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataDisplayComponent} from './views/data-display/data-display.component';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import {DataNotReadyComponent} from './views/data-not-ready/data-not-ready.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
        {
            path: 'dataDisplay',
            component: DataDisplayComponent
        },
        {
            path: 'dataNotReady',
            component: DataNotReadyComponent
        }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
