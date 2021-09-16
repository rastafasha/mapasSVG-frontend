import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimeneLhComponent } from './crimene-lh/crimene-lh.component';
import { DatosVictimasComponent } from './datos-victimas/datos-victimas.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { MapaComponent } from './mapa/mapa.component';
import { SliderComponent } from './slider/slider.component';
import { ViolacionesDdhhComponent } from './violaciones-ddhh/violaciones-ddhh.component';



@NgModule({
  declarations: [
    CrimeneLhComponent,
    DatosVictimasComponent,
    FooterComponent,
    HeaderComponent,
    ListaPaisesComponent,
    MapaComponent,
    SliderComponent,
    ViolacionesDdhhComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrimeneLhComponent,
    DatosVictimasComponent,
    FooterComponent,
    HeaderComponent,
    ListaPaisesComponent,
    MapaComponent,
    SliderComponent,
    ViolacionesDdhhComponent
  ],
})
export class ComponentsModule { }
