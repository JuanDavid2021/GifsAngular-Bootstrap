import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GifsPageComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class GifsModule { }
