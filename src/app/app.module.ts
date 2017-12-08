import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/app.component';
import { LandingComponent } from 'app/pages/landing';
import { AppRoutingModule } from 'app/app-routing.module';
import { LogbookModule } from 'app/modules/logbook';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LogbookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
