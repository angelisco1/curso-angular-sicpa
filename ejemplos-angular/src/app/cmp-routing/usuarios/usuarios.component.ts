import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any> = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .subscribe((resp: any) => {
        this.usuarios = resp;
      })
  }

}
