import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Caracter } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-caracters',
  templateUrl: './add-caracters.component.html'
})
export class AddCaractersComponent{

  @Input() newCaracter: Caracter = {
    name: '',
    power: 0
  };

  constructor(private dbzService: DbzService){}

  // @Output() onNewCaracter: EventEmitter<Caracter> = new EventEmitter()

  addCaracter(){
    if(this.newCaracter.name.trim().length === 0){return;}

    // this.onNewCaracter.emit(this.newCaracter)
    this.dbzService.addCaracter(this.newCaracter)

    this.newCaracter = {
      name: '',
      power: 0
    }
  }
  
}
