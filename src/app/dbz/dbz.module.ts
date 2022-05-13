import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CaractersComponent } from './caracters/caracters.component';
import { AddCaractersComponent } from './add-caracters/add-caracters.component';

import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CaractersComponent,
    AddCaractersComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})

export class DbzModule { }
