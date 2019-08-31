import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { FormComponent } from './estudiante/form.component';
import { VerComponent } from './ver/ver.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    FormComponent,
    VerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
