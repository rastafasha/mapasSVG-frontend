import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapaService } from 'src/app/services/mapa.service';
import { PaisService } from 'src/app/services/pais.service';

import { Pais} from '../../models/pais';
import { MapaComponent } from '../mapa/mapa.component';
import { PaisResponsive } from '../../interfaces/pais.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

@Input() usuarioInChild;
@Input() propagar;
@Input() paisrespuesta:PaisResponsive;

pais$:PaisResponsive;
stringJson: any;

public paises: PaisResponsive;

  constructor(
    private mapaService:MapaService,
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.mapaService.listen().subscribe((m:any) => {
      console.log(m);
      this.onFilterClick(m);
    })

  }
  onFilterClick(event) {
    //console.log('Fire onFilterClick: ', event);
    this.getPais(event);


}

  ngOnInit() {
     window.scrollTo(0, 0);
    //this.activarBotonColor();
    }



  getPais(event:string){


   const code = this.activatedRoute.snapshot.paramMap.get('event');//se llama el id requerido


    this.activatedRoute.params.subscribe( params =>{

      const code = this.paisService.getPais(event).subscribe (
        (resp:PaisResponsive) => {

          this.paisrespuesta = resp;
          //console.log(this.paisrespuesta);
          this.stringJson = JSON.stringify(this.paisrespuesta).replace(/['"]+/g, '');
          //console.log("String json object :", this.stringJson);

        }
      )
        return this.paisrespuesta;
    })

  }


  getPaiseslist(){
    this.paisService.getCarteleraPaises().subscribe(
      resp => {
        this.paises = resp;
      },
      err => console.error('Hay un error al obtener la lista')
      );
  }








}

