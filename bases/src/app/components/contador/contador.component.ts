import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  public title: string = 'Contador App';

  public value: number = 0;

  public base: number = 5


  constructor() { }

  ngOnInit(): void {
  }

  add(val: number) {
    this.value += val;
  }

  sustract(val: number) {
    this.value -= val;
  }

}
