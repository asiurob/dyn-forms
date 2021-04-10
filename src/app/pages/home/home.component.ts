import { Component, OnInit } from '@angular/core';
import { DynButton } from '@interfaces/dyn-button.interface';
import { search } from './home.input';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search = [ search ];
  button: DynButton = { show: true, label: 'Buscar' };
  constructor() { }

  ngOnInit(): void {
  }

}
