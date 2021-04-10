import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynInputComponent } from './dyn-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DynInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [ DynInputComponent ]
})
export class DynInputModule { }
