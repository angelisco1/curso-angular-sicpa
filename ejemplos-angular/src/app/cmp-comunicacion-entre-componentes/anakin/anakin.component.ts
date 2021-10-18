import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {
  nombreLuke = 'Luke Skywalker'
  nombreLeia = 'Leia Organa'

  constructor() { }

  ngOnInit(): void {
  }

  actualizarNombre(nuevoNombre: string): void {
    this.nombreLeia = nuevoNombre;
  }
}
