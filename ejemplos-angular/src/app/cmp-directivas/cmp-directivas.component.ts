import { Component, OnInit } from '@angular/core';

interface IClasesEstilos {
  // fondoAzul: boolean,
  // letraBlanca: boolean
  [cssClass: string]: boolean,
}

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  activarEstilos: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClases() {
    this.activarEstilos = !this.activarEstilos;
  }

  // getClases(): {fondoAzul: boolean, letraBlanca: boolean} {
  getClases() {
    return {
      fondoAzul: this.activarEstilos,
      letraBlanca: this.activarEstilos
    }
  }
}
