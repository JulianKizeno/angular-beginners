import { Component } from '@angular/core';
import { Caracter } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(){}

  newCaracter: Caracter = {
    name: 'Trunks',
    power: 11456
  }

}
