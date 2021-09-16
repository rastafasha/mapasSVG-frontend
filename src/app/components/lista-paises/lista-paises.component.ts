import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapaService } from 'src/app/services/mapa.service';
import { PaisService } from 'src/app/services/pais.service';

import { Pais} from '../../models/pais';
import { MapaComponent } from '../mapa/mapa.component';
import { PaisResposive } from '../../interfaces/pais.interface';
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
@Input() paisrespuesta:PaisResposive;

pais$:PaisResposive;
stringJson: any;

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

  ngOnInit() { window.scrollTo(0, 0);}



  getPais(event:string){


   const code = this.activatedRoute.snapshot.paramMap.get('event');//se llama el id requerido


    this.activatedRoute.params.subscribe( params =>{

      const code = this.paisService.getPais(event).subscribe (
        (resp:PaisResposive) => {

          this.paisrespuesta = resp;
          //console.log(this.paisrespuesta);
          this.stringJson = JSON.stringify(this.paisrespuesta).replace(/['"]+/g, '');
          //console.log("String json object :", this.stringJson);

        }
      )
        return this.paisrespuesta;
    })

  }


  /*getPaiseslist(){
    this.paisService.getPaises().subscribe(
      response => {
        if (response.status === 'success'){
          this.paises = response.paises;
          //console.log(this.paises);
        }
      },
      error => {
        console.log(error);
      }
    );
  }*/





}

