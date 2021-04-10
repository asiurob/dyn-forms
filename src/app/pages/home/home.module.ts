import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DynamicFormModule } from '@dyn-forms/dynamic-form/dynamic-form.module';
import { BuySellButtonsModule } from './components/buy-sell-buttons/buy-sell-buttons.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DynamicFormModule,
    BuySellButtonsModule
  ]
})
export class HomeModule { }
