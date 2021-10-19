import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  productos: Array<any> = [
    { id: 1, nombre: 'one plus 9', descripcion: 'Un teléfono chulo Un teléfono chulo Un teléfono chulo', precio: 800, fechaSalida: new Date(2021, 2, 13) },
    { id: 2, nombre: 'iphone 13', descripcion: 'Un iphone muy caro', precio: 1800, fechaSalida: new Date(2021, 9, 13) },
  ]

  producto: any;
  filtroTxt: string = '';

  mensaje = new Promise((resolve) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...')
    }, 3000)
  })

  usuario1: any;
  datosUsuario: any = {};

  constructor() {
    this.producto = this.productos[0];
    this.usuario1 = fetch('http://jsonplaceholder.typicode.com/users/1')
      .then(resp => resp.json())

    fetch('http://jsonplaceholder.typicode.com/users/1')
      .then(resp => resp.json())
      .then(datosUsuario => this.datosUsuario = datosUsuario)
  }

  ngOnInit(): void {
  }

  addProducto(event: any): void {
    const nuevoProducto = {
      id: 3,
      nombre: event.target.value,
      descripcion: '',
      precio: 8,
      fechaSalida: new Date(),
    }
    // this.productos.push(nuevoProducto)
    this.productos = [...this.productos, nuevoProducto]
    // [[{}, {}], {}]
    // [{}, {}, {}]
  }

  // titlecase(val: string): string {
  //   return val.split(' ').map(palabra => palabra[0].toUpperCase()).join(' ')
  // }
  // 'one plus 9' -> ['one', 'plus', '9'] -> ['One', 'Plus', '9'] -> 'One Plus 9'
}
