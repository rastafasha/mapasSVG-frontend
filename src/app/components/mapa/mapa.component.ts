import { Component, EventEmitter, Input, OnInit,  Output, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { PaisService } from '../../services/pais.service';
import { PaisResposive } from '../../interfaces/pais.interface';
import { MapaService } from 'src/app/services/mapa.service';
import { Pais } from 'src/app/models/pais';





@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent  implements OnInit{


  @Output() propagar: EventEmitter<string> = new EventEmitter();
  //@Output('valor') paisrespuesta: number = 50;

  @Output() paisrespuesta: string;




  //@Output() paisrespuesta = 'conexion desde mapa';


  value: Observable<PaisResposive>;

  ServerUrl = environment.baseUrl;
  public status;
  public code;


  pais: PaisResposive;
  isActive: boolean = false;

  constructor(
    private paisService: PaisService,
    private mapaService: MapaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    }

  ngOnInit() {
  }


  botonActivo(event) {


    //llamamos el id seleccionado
    const idAttr = event.srcElement.attributes.id;
    const value = idAttr.nodeValue;
    //console.log(value);

    /*this.activatedRoute.params.subscribe( params =>{

      const event = this.paisService.getPais(value).subscribe (
        (paisrespuesta:Pais) => {

          console.log(paisrespuesta);
          console.log(paisrespuesta[0].code);
          return paisrespuesta;
        }
      )

      //this.mapaService.filter(this.botonActivo.arguments());
    })*/
    this.mapaService.filter(value);


  }




}
