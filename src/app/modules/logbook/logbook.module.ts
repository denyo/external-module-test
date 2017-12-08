import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LogbookComponent } from './logbook.component';
import { LogbookChildComponent } from './logbook-child.component';
import { LogbookService } from './logbook.service';

const appRoutes: Routes = [
  { path: '', component: LogbookComponent },
  { path: ':logId', component: LogbookChildComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [
    LogbookComponent,
    LogbookChildComponent,
  ],
  providers: [
    LogbookService,
  ],
  exports: [
    LogbookComponent,
    LogbookChildComponent,
  ],
})
export class LogbookModule { }
