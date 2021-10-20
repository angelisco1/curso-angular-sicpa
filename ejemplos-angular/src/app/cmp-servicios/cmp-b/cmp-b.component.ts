import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  mensajes: Array<string> = []
  mensajeDeA: string = ''

  // constructor(public datosService: DatosService) { }
  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.mensajes = this.datosService.mensajes;

    this.datosService.mensajeParaB.subscribe((nuevoMsg: string) => {
      this.mensajeDeA = nuevoMsg;
    })
  }

  addMsg(event: any): void {
    this.datosService.addMensaje(event.target.value);
  }

  // getEventEmitter() {
  //   return this.datosService.mensajeParaB;
  // }
}
