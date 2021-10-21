import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {
  mensajesError: Array<string> = []
  @Input() errors: any = {}

  constructor() { }

  ngOnChanges() {
    this.mensajesError = []
    for (let keyError in this.errors) {
      if (keyError === 'required') {
        this.mensajesError.push('El campo es obligatorio');
      }

      if (keyError === 'minlength') {
        this.mensajesError.push(`La longitud mínima es de ${this.errors[keyError].requiredLength} caracteres. Te faltan ${this.errors[keyError].requiredLength-this.errors[keyError].actualLength}`);
      }
    }
  }

  ngOnInit(): void {}

}