import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynInput } from './dyn-input.interface';

@Component({
  selector: 'dyn-input',
  templateUrl: './dyn-input.component.html',
  styleUrls: ['./dyn-input.component.scss']
})
export class DynInputComponent {

  @Input() config: DynInput;
  @Input() row: number;
  @Input() HumanKeyPress: boolean;
  @Input() form: FormGroup;
  @Output() dynEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() suffixEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() prefixEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  timer: any;
  suffixControl = false;
  prefixControl = false;

  constructor() {
  }


  handleEvent( control: string, event: string ): void {

    if ( this.timer ) {
      clearTimeout( this.timer );
    }
    const delay = this.HumanKeyPress ? 400 : 0;
    this.timer = setTimeout( () => {
      const value = this.form.value[ control ];
      if ( this.config.emitBlur && event === 'blur' ) {
        this.dynEvent.emit( { value, control } );
      }

      if ( this.config.emitKeyup && event === 'keyup' ) {
        this.dynEvent.emit( { value, control } );
      }
    }, delay );
  }

  suffixHandler(): void {
    if ( this.config.emitSuffix ) {
      this.suffixControl = !this.suffixControl;
      this.suffixEvent.emit( this.suffixControl );
    }
  }

}
