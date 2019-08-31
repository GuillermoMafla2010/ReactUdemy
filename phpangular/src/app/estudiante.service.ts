import { Estudiante } from './estudiante/estudiante';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {of , Observable} from 'rxjs';


@Injectable({
   providedIn: 'root'
})



export class EstudianteService {

  private url: string = 'http://localhost:81/apirest_php/apirestfull_angular/public/api/estudiantes';
  private _httpHeaders=new HttpHeaders({'Content-Type':'application/json'});


  constructor(private http: HttpClient) { }


  getClientes(): Observable<any>{
    return this.http.get<any>(this.url,{headers:this._httpHeaders});

  }

  postEstudiante(estudiante:Estudiante):Observable<any>{
    return this.http.post<any>(this.url,estudiante);
}

getEstudiante(id):Observable<any>{
  return this.http.get<any>(`${this.url}/${id}`)
}

}
