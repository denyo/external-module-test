import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from 'app/pages/landing/landing.component';
import { LogbookModule } from 'app/modules/logbook/logbook.module';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'logbook', loadChildren: 'app/modules/logbook/logbook.module#LogbookModule' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
