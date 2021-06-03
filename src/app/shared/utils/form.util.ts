import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DynError } from '@interfaces/dyn-error.interface';

export class DynFormBuilder {

    public innerForm: FormGroup;
    constructor() {
        this.innerForm = new FormGroup({});
    }

    public addControls( controls: any[] | any ): void {

        Array.isArray( controls ) ?
        controls.map( control => this.buildControl( control ) ) :
        this.buildControl( controls );
    }

    public toggleControl( identifier: string, enable: boolean ): void {
        enable ?
        this.innerForm.get( identifier ).enable() :
        this.innerForm.get( identifier ).disable();
        this.innerForm.get( identifier ).updateValueAndValidity();
    }

    private buildControl( control: any ): void {
        const validators = control.errors ?
        this.buildValidators( control.errors ) :
        [];
        const value = control.value || '';
        this.innerForm.addControl(
            control.formControl,
            new FormControl( value, validators )
        );

        if ( control.disabled ) {
            this.innerForm.get( control.formControl ).disable();
        }
    }

    private buildValidators( requestValidators: DynError ): ValidatorFn[] {
      const validators: ValidatorFn[] = [];
      Object.keys( requestValidators )
      .forEach( v => {
        if ( v === 'required' ) {
          validators.push( Validators.required );
      } else if ( v === 'email' ) {
          validators.push( Validators.email );
      } else if ( v === 'password' ) {
          const pattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
          validators.push( Validators.pattern( pattern ) );
      } else if ( v === 'number' ) {
          const pattern = '^[0-9]+$';
          validators.push( Validators.pattern( pattern ) );
      } else if ( v === 'maxLength' ) {
          const maxLength = Number( requestValidators[ v ].split(',')[0] ) || 0;
          validators.push( Validators.maxLength( maxLength ) );
      } else if ( v === 'minLength' ) {
          const minLength = Number( requestValidators[ v ].split(',')[0] ) || 0;
          validators.push( Validators.minLength( minLength ) );
      }
      });
      return validators;
    }

}
