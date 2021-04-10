import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynButton } from '@interfaces/dyn-button.interface';
import { DynFormBuilder } from '@utils/form.util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  @Input() showCard = '';
  @Input() inputs: any = [];
  @Input() button: DynButton;
  @Input() rowClass: string;
  @Input() title: string;
  @Output() dynEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup;
  dynForm = new DynFormBuilder();
  columnClass = 'col-12 col-md-4';
  subs: Subscription[] = [];

  constructor() {
  }

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    this.inputs.map( ( i: any ) => this.dynForm.addControls( i ) );
    this.form = this.dynForm.innerForm;

    if ( this.button.emitForm ) {
      const s = this.form.valueChanges
      .subscribe( () => {
        this.changeForm.emit( this.form );
      });

      this.subs.push( s );

    }
  }

  releaseEvent( evt: any ): void {
    this.dynEvent.emit( evt );
  }

  submit(): void {
    this.submitEvent.emit( this.form );
  }

}
