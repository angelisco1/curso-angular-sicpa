import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.miPrimerObs()
  }

  miPrimerObs() {
    const miObs = new Observable((observer: Observer<string>) => {
      observer.next('Primer mensaje')
      setTimeout(() => {
        observer.next('Segundo mensaje')
      }, 2000)
      setTimeout(() => {
        // observer.error('Un error')
        observer.complete()
      }, 5000)
      setTimeout(() => {
        observer.next('Tercer mensaje')
      }, 7000)
    })

    miObs.subscribe(
      (dato: string) => {console.log(dato)},
      (err: any) => {console.error(err)},
      () => {console.log('Ya no vas ha recibir nada más')}
    )
  }

}
