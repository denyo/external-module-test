import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LogbookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
