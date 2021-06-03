import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynSelect } from './dyn-select.interface';

@Component({
  selector: 'dyn-select',
  templateUrl: './dyn-select.component.html',
  styleUrls: ['./dyn-select.component.scss']
})
export class DynSelectComponent {

  @Input() config: DynSelect;
  @Input() form: FormGroup;
  @Output() dynEvent: EventEmitter<any> = new EventEmitter<any>();



  handleEvent(): void {
    if ( this.config.emitChange ) {
      const control = this.config.formControl;
      const value = this.form.value[ control ];
      this.dynEvent.emit( { value, control, event: 'change' } );
    }
  }

}
