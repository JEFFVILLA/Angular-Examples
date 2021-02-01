import { Component, Input } from '@angular/core';
import { Personaje } from '../models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Input() personajes: Personaje[];


}
