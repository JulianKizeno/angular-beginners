import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es <strong> {{base}} </strong></h3>
        
        <button (click)="accum(base)"> + {{base}} </button>
        
        <span> {{counterNumber}} </span>
        
        <button (click)="accum(- base)"> - {{base}} </button>
    `,

})
export class CounterComponent {
    public title: string = 'Contador App';

    public counterNumber: number = 0;
    public base: number = 5;
  
    accum( val: number ){
      this.counterNumber += val
    }
}