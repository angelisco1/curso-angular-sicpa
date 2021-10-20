import { Component, OnInit } from '@angular/core';
import { DatosService, ITarea } from './datos.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  tareas: Array<ITarea> = []

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getTareas()
      .subscribe((tareas: Array<ITarea>) => {
        console.log({tareas})
        this.tareas = tareas;
      })
  }

  save(event: any) {
    const nuevaTarea = {
      titulo: event.target.value,
      completada: false
    }
    console.log({nuevaTarea})
    this.datosService.crearTarea(nuevaTarea)
      .subscribe(resp => {
        console.log({resp})
        alert('La tarea se ha guardado correctamente')

        const tareaAnyadir: ITarea = {
          id: resp.name,
          ...nuevaTarea
        }

        this.tareas.push(tareaAnyadir);
      })
  }

  update(tarea: ITarea) {
    const { id, completada } = tarea;

    this.datosService.completarTarea(id, !completada)
      .subscribe((resp: any) => {
        console.log({resp})
        alert('La tarea se ha actualizado')
        tarea.completada = resp.completada;
      })
  }

}
