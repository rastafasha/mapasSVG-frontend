import { Component, EventEmitter, Input, OnInit,  Output, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { PaisService } from '../../services/pais.service';
import { PaisResponsive } from '../../interfaces/pais.interface';
import { MapaService } from 'src/app/services/mapa.service';
import { HttpClient } from '@angular/common/http';
import { Pais } from 'src/app/models/pais';





@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent  implements OnInit{


  @Output() propagar: EventEmitter<string> = new EventEmitter();
  @Output() paisrespuesta: string;
  //@Output() paisrespuesta = 'conexion desde mapa';

  value: Observable<PaisResponsive>;
  public paises: Pais;

  ServerUrl = environment.baseUrl;
  public status;
  public code;


  error: string;

  public serverUrl = environment.baseUrl;

  public pais: PaisResponsive;



  constructor(
    private paisService: PaisService,
    private mapaService: MapaService,
    private activatedRoute: ActivatedRoute,
    ) {
    }

  ngOnInit() {

    ///this.isActive = true;

    //this.paises.isActive;

    this.activarBotonColor();
    //this.getPaiseslist();

    this.paisService.getPaises().subscribe(
      (data: Pais) => this.paises = data,
      error => this.error = error,

      );
  }


  botonActivo(event) {


    //llamamos el id seleccionado
    const idAttr = event.srcElement.attributes.id;
    const value = idAttr.nodeValue;
    this.mapaService.filter(value);


  }

 activarBotonColor(){

  return this.paisService.getPaises().subscribe(
    resp => {
      this.paises = resp;
      console.log(this.paises);

      if(true){
        var colorPais = document.getElementsByClassName("land");
            for (var i =0; i<this.paises.length; i++) {
                colorPais[this.paises[i].code].classList.add("active");

          }

        }//end for if

      }

  )
}






}
