import { Estudiante } from './../estudiante/estudiante';
import { EstudianteService } from './../estudiante.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {


  estudiante:Estudiante
  constructor(private _router:ActivatedRoute , private service:EstudianteService) { }

  ngOnInit() {

    this._router.params.subscribe(
      params=>{
        let id=params['id']


        if(id){
            this.service.getEstudiante(id).subscribe(
              estudiante=>{

                this.estudiante=estudiante

                console.log(this.estudiante)
              }
            )
        }
      }
    )
  }


}
