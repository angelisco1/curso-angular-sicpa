import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  mensajes: Array<string> = [
    'Un mensaje'
  ]
  mensajeParaB = new EventEmitter<string>();

  constructor() { }

  addMensaje(nuevoMsg: string): void {
    this.mensajes.push(nuevoMsg);
  }

  enviarMensaje(msg: string) {
    this.mensajeParaB.emit(msg);
  }

  // get msgs(): Array<string> {
  //   return this.mensajes;
  // }

  // set msgs(nuevoVal: Array<string>) {
  //   this.mensajes = nuevoVal
  // }

}
