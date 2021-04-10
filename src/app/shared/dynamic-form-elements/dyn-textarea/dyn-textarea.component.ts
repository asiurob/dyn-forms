import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DynTextarea } from './dyn-textarea.interface';

@Component({
  selector: 'dyn-textarea',
  templateUrl: './dyn-textarea.component.html',
  styleUrls: ['./dyn-textarea.component.scss']
})
export class DynTextareaComponent implements OnInit, OnDestroy {

  @Input() config: DynTextarea;
  @Input() row: number;
  @Input() HumanKeyPress: boolean;
  @Input() form: FormGroup;
  @Output() dynEvent: EventEmitter<any> = new EventEmitter<any>();

  timer: any;
  remain: string;
  suffixControl = false;
  prefixControl = false;
  subs: Subscription[] = [];

  constructor() {
  }

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    const remain  = this.config.errors?.maxLength.split(',')[0];
    if ( remain ) {
      const s = this.form.controls[ this.config.formControl ]
      .valueChanges
      .subscribe( ( val: any ) => {
        const current = val.split('');
        this.remain = `${ current.length } de ${ remain } restantes`;
      });
      this.subs.push( s );
    }
  }


  handleEvent( control: string, event: string ): void {
    const value = this.form.value[ control ];
    if ( this.timer ) {
      clearTimeout( this.timer );
    }
    const delay = this.HumanKeyPress ? 400 : 0;
    this.timer = setTimeout( () => {

      if ( this.config.emitBlur && event === 'blur' ) {
        this.dynEvent.emit( { value, control } );
      }

      if ( this.config.emitKeyup && event === 'keyup' ) {
        this.dynEvent.emit( { value, control } );
      }
    }, delay );
  }


}
