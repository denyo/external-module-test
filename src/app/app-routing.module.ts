import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from 'app/pages/landing';
import { LogbookEntrypoint } from 'app/modules/logbook';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'logbook', loadChildren: LogbookEntrypoint },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
