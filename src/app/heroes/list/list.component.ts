import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];

  public erasedHero: string = '';
  
  eraseHero(){
    this.erasedHero = this.heroes.shift() || ''
    console.log(this.erasedHero)
  }

}
