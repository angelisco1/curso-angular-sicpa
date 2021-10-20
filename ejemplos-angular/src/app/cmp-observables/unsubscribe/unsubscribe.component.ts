import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {
  suscripcion: Subscription | null = null;
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {}, 1000)
    const obs = interval(1000)
      .pipe(
        map(num => num * 2),
        // filter(num => num > 10 && num < 20)
      )

    this.suscripcion = obs.subscribe((num) => {
      console.log(num)
    })
  }

  ngOnDestroy() {
    this.suscripcion?.unsubscribe();
  }
}
