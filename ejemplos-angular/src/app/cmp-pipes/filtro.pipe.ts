import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<any>, textoFiltro: string): Array<any> {
    return value.filter(prod => prod.nombre.includes(textoFiltro))
  }

}
