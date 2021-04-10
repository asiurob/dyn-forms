import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynInputModule } from '@dyn-forms/dyn-input/dyn-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { DynSelectModule } from '@dyn-forms/dyn-select/dyn-select.module';
import { DynTextareaModule } from '@dyn-forms/dyn-textarea/dyn-textarea.module';
import { DynRadioModule } from '@dyn-forms/dyn-radio/dyn-radio.module';



@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    DynInputModule,
    DynSelectModule,
    DynTextareaModule,
    DynRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [ DynamicFormComponent ]
})
export class DynamicFormModule { }
