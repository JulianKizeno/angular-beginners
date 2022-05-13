import { Component, Input } from '@angular/core';
import { Caracter } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.component.html'
})
export class CaractersComponent {

  // @Input() caracters: any[] = [];

 
  constructor(private dbzService: DbzService){}

  get caracters(): Caracter[]{
    return this.dbzService.caracters
  }

}
