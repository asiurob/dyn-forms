import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynTextareaComponent } from './dyn-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [DynTextareaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [ DynTextareaComponent ]
})
export class DynTextareaModule { }
