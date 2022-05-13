import { Injectable } from "@angular/core";
import { Caracter } from "../interface/dbz.interface";

@Injectable()
export class DbzService {

    constructor(){};

    private _caracters: Caracter[] = [
        {
          name: 'Goku',
          power: 15500
        },
        {
          name: 'Vegeta',
          power: 10500
        }
    ];

    get caracters(): Caracter[] {
        return [...this._caracters]
    };

    addCaracter(caracter: Caracter){
        this._caracters.push(caracter)
    }
    
}