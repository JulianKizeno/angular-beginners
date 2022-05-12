import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponent{

    public heroName: string = 'Ironman';
    public heroAge: number = 45;

    get capitalizedHeroName(): string{
        return this.heroName.toUpperCase();
    }

    getHeroName(): string{
        return `${this.heroName} - ${this.heroAge}`
    }

    changeHeroName(): void{
        this.heroName = 'Spiderman';
    }

    changeHeroAge(): void{
        this.heroAge = 17;
    }

}