import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public nombre: string = "Iroman";
  public edad: number = 33;

  constructor() { }

  ngOnInit(): void {
  }


  obternerNombre(): string {
    return `${this.nombre} - ${this.edad}`
  }

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 67;
  }

}
