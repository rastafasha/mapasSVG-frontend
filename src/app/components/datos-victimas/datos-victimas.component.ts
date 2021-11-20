import { Component, OnInit, Input } from '@angular/core';
import { Datosvictima } from 'src/app/models/datos';
import { DatosvictimaService } from 'src/app/services/datos.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { PaisResponsive } from '../../interfaces/pais.interface';
import { MapaService } from 'src/app/services/mapa.service';


@Component({
  selector: 'app-datos-victimas',
  templateUrl: './datos-victimas.component.html',
  styleUrls: ['./datos-victimas.component.css']
})
export class DatosVictimasComponent implements OnInit {

  @Input() paisrespuesta:PaisResponsive;
  @Input() paisrespuestaDatosv:PaisResponsive;
  stringJson: any;
  pais$:PaisResponsive;

  datosvs$: Observable<PaisResponsive>;
  error: {};
  ServerUrl = environment.baseUrl;
  private http: HttpClient;
  datosvictima:Datosvictima;

  display='none';

  constructor(
    private datosvictimaService: DatosvictimaService,
    private mapaService:MapaService,
    private activatedRoute: ActivatedRoute,
    handler: HttpBackend
    ) {
      this.http = new HttpClient(handler);

      this.mapaService.listen().subscribe((m:any) => {
        //console.log(m);
        this.onFilterClick(m);
      })
    }


    onFilterClick(event) {
      //console.log('Fire onFilterClick: ', event);
      this.getPaisVictimas(event);

  }

  ngOnInit() {
    // this.getDatosbyPais();

  }

  getPaisVictimas(ev:string){


    const code = this.activatedRoute.snapshot.paramMap.get('event');//se llama el id requerido


     this.activatedRoute.params.subscribe( params =>{

       const code = this.datosvictimaService.getDatosvictimabyPais(ev).subscribe (
         (resp:PaisResponsive) => {

           this.paisrespuestaDatosv = resp;
           //console.log(this.paisrespuesta);
           this.stringJson = JSON.stringify(this.paisrespuestaDatosv).replace(/['"]+/g, '');
           //console.log("String json object :", this.stringJson);

         }
       )
         return this.paisrespuestaDatosv;
     })

   }



  getDatosbyPais(){
    // sacar el id del post del la url
    this.activatedRoute.params.subscribe(params => {
      const id = +params.code;

      // peticion ajax para sacar los datos del post
      this.datosvictimaService.getDatosvictimabyPais(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.datosvictima = response.datosvictima;
             console.log(this.datosvictima);

          }
        },
        error => {
          console.log(error);
          //this.router.navigate(['/user']);
        }
      );

    });

  }


  onCloseHandled(){
    this.display='none';
 }



}
