import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() personajes: Personaje[];
  @Input() nuevoPersonaje: Personaje;

  nuevo: Personaje = {
    name: '',
    power: 0
  }
  add() {
    if (this.nuevo.name.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo)
    this.nuevo = { name: '', power: 0 };
  }
}
