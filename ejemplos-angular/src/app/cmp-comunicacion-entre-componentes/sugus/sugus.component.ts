import { Component, OnInit, Input } from '@angular/core';
import { ISugus } from '../../interfaces/interfaces'

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {
  @Input() sabor: string = 'limón';
  @Input() color: string = 'yellow';
  // @Input() sugus: ISugus = {color: '', sabor: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
