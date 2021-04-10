import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynSelectComponent } from './dyn-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DynSelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [ DynSelectComponent ]
})
export class DynSelectModule { }
