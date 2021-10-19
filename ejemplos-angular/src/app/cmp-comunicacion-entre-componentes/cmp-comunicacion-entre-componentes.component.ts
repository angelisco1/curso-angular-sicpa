import { Component, OnInit } from '@angular/core';
import { ISugus } from '../interfaces/interfaces'

// interface ISugusConId extends ISugus {
//   id: number;
// }

@Component({
  selector: 'app-cmp-comunicacion-entre-componentes',
  templateUrl: './cmp-comunicacion-entre-componentes.component.html',
  styleUrls: ['./cmp-comunicacion-entre-componentes.component.css']
})
export class CmpComunicacionEntreComponentesComponent implements OnInit {
  sugus: Array<ISugus> = [
    { sabor: 'limón', color: 'yellow' },
    { sabor: 'naranja', color: 'orange' },
    { sabor: 'piña', color: 'blue' },
    { sabor: 'fresa', color: 'red' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
