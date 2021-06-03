import { Component } from '@angular/core';
import { DynFormConfig } from '@dyn-forms/dynamic-form/dynamic-form.interface';
import { DynFormBuilder } from '@utils/form.util';
import { inputs } from 'app.inputs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'dyn-forms';

  form: DynFormBuilder;

  dynConfig: DynFormConfig = {
    inputs,
    // button: { label: 'Send', show: true },
    // emitForm: true,
  };


  constructor() {}

  formChanged( evt: any ): void {
    console.log( evt );
  }

  eventOccur( evt: any ): void {
    console.log( evt );
    // this.dynConfig.inputs[1].options = [{ key: 'Otro', value: 'Otro value' }];
    console.log( this.form.toggleControl( 'input2', false ) );
  }

  formSubmmited( evt: any ): void {
    console.log( evt );
  }

  getForm( form: DynFormBuilder ): void {
    this.form = form;
  }

}
