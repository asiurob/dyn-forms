import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynRadioComponent } from './dyn-radio.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DynRadioComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  exports: [ DynRadioComponent ]
})
export class DynRadioModule { }
