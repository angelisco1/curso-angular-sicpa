import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  mostrarMsg() {
    this.logService.logError('El usuario no se ha encontrado...')
  }

}
