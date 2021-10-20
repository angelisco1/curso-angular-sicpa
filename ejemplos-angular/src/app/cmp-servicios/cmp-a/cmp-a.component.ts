import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [DatosService]
})
export class CmpAComponent implements OnInit {
  mensajes: Array<string> = []

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.mensajes = this.datosService.mensajes;
  }

  addMsg(event: any): void {
    this.datosService.addMensaje(event.target.value);
  }

  enviarMsg(event: any): void {
    this.datosService.enviarMensaje(event.target.value);
  }
}
