import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Hulk', 'Thor']
  heroesBorrado: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  borrarListado(): void {
    this.heroesBorrado.push(this.heroes.pop());
  }
}
