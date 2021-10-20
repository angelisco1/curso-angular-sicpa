import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ITareaId {
  name: string
}

export interface ITarea {
  titulo: string,
  completada: boolean,
  id: string
}

interface ICompletada {
  completada: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  URL: string = 'https://ejemplos-dc1c1.firebaseio.com/tareas-at/angelvillalba'

  constructor(private http: HttpClient) { }

  completarTarea(id: string, completada: boolean): Observable<ICompletada> {
    return this.http.patch<ICompletada>(`${this.URL}/${id}.json`, {completada})
  }

  getTareas(): Observable<Array<ITarea>> {
    return this.http.get(this.URL + '.json')
      .pipe(
        map((tareas: any) => {
          const arrayTareas: Array<ITarea> = [];
          for (let id in tareas) {
            const tarea: ITarea = {
              id: id,
              ...tareas[id]
            }
            arrayTareas.push(tarea)
          }
          return arrayTareas;
        })
      )
  }

  crearTarea(tarea: any): Observable<ITareaId> {
    return this.http.post<ITareaId>(this.URL + '.json', tarea)
  }
}
