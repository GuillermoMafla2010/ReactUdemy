import { EstudianteService } from './../estudiante.service';
import { Estudiante } from './estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   estudiante:Estudiante=new Estudiante;

  constructor(private service:EstudianteService) { }

  ngOnInit() {
  }

  create(){
  this.service.postEstudiante(this.estudiante).subscribe();
  }

}
