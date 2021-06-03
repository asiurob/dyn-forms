import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynFormBuilder } from '@utils/form.util';
import { Subscription } from 'rxjs';
import { DynFormConfig } from './dynamic-form.interface';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {


  @Input() dynConfig: DynFormConfig;
  @Output() dynEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() dynSubmitEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() dynChangeForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() form: EventEmitter<DynFormBuilder> = new EventEmitter<DynFormBuilder>();

  _form: FormGroup;
  dynForm = new DynFormBuilder();
  columnClass = 'col-12';
  valueChangesSub: Subscription;

  constructor() { }

  ngOnDestroy(): void { this.valueChangesSub.unsubscribe(); }

  ngOnInit(): void {
    this.dynConfig.inputs.map( ( i: any ) => this.dynForm.addControls( i ) );
    this._form = this.dynForm.innerForm;
    this.form.emit( this.dynForm );

    if ( this.dynConfig.emitForm ) {
      this.valueChangesSub = this._form.valueChanges
      .subscribe( _ => this.dynChangeForm.emit( this._form ) );
    }
  }

  releaseEvent( evt: any ): void {
    this.dynEvent.emit( evt );
  }

  submit(): void {
    this.dynSubmitEvent.emit( this._form );
  }

}
