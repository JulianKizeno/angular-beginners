import { Component } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html'
})
export class ListadoComponent {
	heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitán América'];
    nombreHeroeBorrado: string = '';

    borrarHeroe(){
        this.nombreHeroeBorrado = this.heroes.splice(this.heroes.length - 1).toString();
    }
}
