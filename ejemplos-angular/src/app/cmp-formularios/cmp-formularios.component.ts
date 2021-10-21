import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
import * as ValidacionesCustom from './validaciones';

@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      usuario: new FormControl('', Validators.required),
      email: new FormControl('', ValidacionesCustom.emailValido),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {
  }

  registrate() {
    console.log(this.formulario)
    console.log({value: this.formulario.value})
  }

}
