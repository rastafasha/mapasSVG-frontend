import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { PaisResponsive } from './interfaces/pais.interface';
import { MapaService } from './services/mapa.service';
import { PaisService } from './services/pais.service';
import { Pais } from './models/pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() paisrespuesta:PaisResponsive;
  @Input() paisrespuestacrimenes:PaisResponsive;
  @Input() paisrespuestaViolaciones:PaisResponsive;
  @Input() paisrespuestaDatosv:PaisResponsive;

  @Input() paiseslists: PaisResponsive;
 error: {};



constructor(
  private mapaService:MapaService,
  private paisService: PaisService,

){


}

  ngOnInit() {
    window.scrollTo(0, 0);

  }


}
