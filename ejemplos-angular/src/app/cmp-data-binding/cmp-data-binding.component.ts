import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {
  nombre: string = 'aa'
  inputDeshabilitado = false;
  // alt: string = '';

  constructor() {}

  ngOnInit(): void {
    // this.alt = `Imagen de ${this.nombre}`
    // this.alt = 'Imagen de ' + this.nombre
  }

  getNombre(): string {
    return this.nombre;
  }

  resetNombre(event: Event, num: number): void {
    console.log(event)
    this.nombre = 'Ángel'
  }

  cambiarNombre(event: any): void {
    this.nombre = event.target.value;
  }

  cambiarNombre2(valor: string): void {
    this.nombre = valor;
  }

}
