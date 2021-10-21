import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  idUsuario: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log({params})
      this.idUsuario = params.get('usuarioId')
      // GET http://jsonplaceholder.typicode.com/users/idUsuario
    })
  }

}
