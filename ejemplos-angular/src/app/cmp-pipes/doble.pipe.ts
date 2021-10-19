import { Pipe, PipeTransform } from '@angular/core';

interface IOpcionesDoble {
  resta?: number,
  suma?: number,
}

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, opciones?: IOpcionesDoble): number {
  // transform(value: number, resta?: number, suma?: number): number {
    let resultado = value * 2

    // if (opciones && opciones.resta)
    if (opciones?.resta) {
      resultado -= opciones.resta;
    }
    if (opciones?.suma) {
      resultado += opciones.suma;
    }
    return resultado;
  }

}