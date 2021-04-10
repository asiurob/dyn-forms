import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  form: FormGroup;
  showSearch = false;
  fade = '';
  options: string[] = ['Honda', 'Kawazaki', 'Vulcan'];
  filteredOptions: Observable<string[]>;
  constructor(

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl()
    });

    this.filteredOptions = this.form.controls.search.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  fadeTransition( type: boolean ): void {
    this.showSearch = type;
    this.fade = type ? 'fadeIn' : 'fadeOut';
    this.form.get('search').setValue('');
    this.form.updateValueAndValidity();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  submit(): void {
    console.log( this.form );
  }

}
