import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuySellButtonsComponent } from './buy-sell-buttons.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BuySellButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ BuySellButtonsComponent ]
})
export class BuySellButtonsModule { }
