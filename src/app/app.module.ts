import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NavigatorModule } from '@components/navigator/navigator.module';
import {ScrollingModule, ScrollDispatcher} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AppRoutingModule,
    NavigatorModule,
    ToastrModule.forRoot()
  ],
  providers: [ ScrollDispatcher ],
  bootstrap: [AppComponent]
})
export class AppModule { }
