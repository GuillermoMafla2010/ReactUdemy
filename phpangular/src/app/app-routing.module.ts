import { VerComponent } from './ver/ver.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { FormComponent } from './estudiante/form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path:'crear' , component:FormComponent},
  {path:'',component:EstudianteComponent},
  {path:'ver/:id' , component:VerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
