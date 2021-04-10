import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynRadio } from './dyn-radio.interface';

@Component({
  selector: 'dyn-radio',
  templateUrl: './dyn-radio.component.html',
  styleUrls: ['./dyn-radio.component.scss']
})
export class DynRadioComponent {

  @Input() config: DynRadio;
  @Input() form: FormGroup;
  @Output() dynEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}


  handleEvent(): void {
    if ( this.config.emitChange ) {
      const control = this.config.formControl;
      const value   = this.form.value[ control ];
      this.dynEvent.emit( { value, control } );
    }
  }

}
