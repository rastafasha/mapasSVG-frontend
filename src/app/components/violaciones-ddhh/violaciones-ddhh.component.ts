import { Component, Input, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { Violacionesddhh } from 'src/app/models/violaciones';
import { ViolacionesddhhService } from 'src/app/services/violaciones.service';

import { PaisResposive } from '../../interfaces/pais.interface';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-violaciones-ddhh',
  templateUrl: './violaciones-ddhh.component.html',
  styleUrls: ['./violaciones-ddhh.component.css']
})
export class ViolacionesDdhhComponent implements OnInit {
  @Input() paisrespuesta:PaisResposive;
  paisrespuestaViolaciones:{};
  stringJson: any;
  pais$:PaisResposive;

  violaciones$: Observable<Violacionesddhh>;
  public violacionesddhh: Violacionesddhh;



  constructor(
    private mapaService:MapaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private violacionesddhhServices: ViolacionesddhhService,

  ) {

    this.mapaService.listen().subscribe((m:any) => {
      //console.log(m);
      this.onFilterClick(m);
    })
  }

  onFilterClick(event) {
    //console.log('Fire onFilterClick: ', event);
    this.getPaisViolaciones(event);

}

  ngOnInit() {
    // this.getViolacionesbyPais();

  }


  getPaisViolaciones(event:string){


    const code = this.activatedRoute.snapshot.paramMap.get('event');//se llama el id requerido


     this.activatedRoute.params.subscribe( params =>{

       const code = this.violacionesddhhServices.getViolacionbyPais(event).subscribe (
         (resp:PaisResposive) => {

           this.paisrespuestaViolaciones = resp;
           this.paisrespuestaViolaciones = Array.of(this.paisrespuestaViolaciones);;
           //console.log(this.paisrespuesta);
           //this.stringJson = JSON.stringify(this.paisrespuestaViolaciones).replace(/['"]+/g, '');
           //console.log("String json object :", this.stringJson);

         }
       )
         return this.paisrespuestaViolaciones;
     })

   }


  getViolacionesbyPais(){
    // sacar el id del post del la url
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.violacionesddhhServices.getViolacionbyPais(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.violacionesddhh = response.violacionesddhh;
             console.log(this.violacionesddhh);


          }else{
            //this.router.navigate(['/user']);
          }
        },
        error => {
          console.log(error);
          //this.router.navigate(['/user']);
        }
      );

    });

}

}
