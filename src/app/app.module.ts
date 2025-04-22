import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // con esto es lo que activa los pipes como 'titlecase'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // -- se declara el componente principal que pertenece a este módulo
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule // este es el argumento mas importante
  ],
  providers: [], // Aquí se registrarían servicios globales si se requieren
  bootstrap: [AppComponent] // -- este es el componente que se carga primero al iniciar la aplicación
})
export class AppModule {}