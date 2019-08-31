import { EstudianteService } from './../estudiante.service';

import { Component, OnInit } from '@angular/core';
import {Estudiante} from './estudiante';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante:Estudiante;

  constructor(private estudiateservice:EstudianteService) { }

  ngOnInit() {

this.getClientes();

 setTimeout(()=>{this.obterneId();},2000);
  }


  getClientes(){
    this.estudiateservice.getClientes().subscribe(
      estudiante=>this.estudiante=estudiante
    );
  }


  obterneId(){
    console.log(this.estudiante)
  }
}
