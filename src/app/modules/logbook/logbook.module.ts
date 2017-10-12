import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogbookComponent } from './logbook.component';
import { LogbookService } from './logbook.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LogbookComponent,
  ],
  providers: [
    LogbookService,
  ],
  exports: [
    LogbookComponent,
  ],
})
export class LogbookModule { }
