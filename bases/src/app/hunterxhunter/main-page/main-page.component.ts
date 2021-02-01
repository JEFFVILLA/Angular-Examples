import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  nuevo: Personaje = {
    name: 'Meruem',
    power: 1233
  }
  personajes: Personaje[] = [{
    name: 'Killua',
    power: 10000
  },
  {
    name: 'Leorio',
    power: 2000.
  },
  {
    name: 'Kurapika',
    power: 20000.
  }]




}
