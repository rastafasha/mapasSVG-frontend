import { Component, Input, OnInit } from '@angular/core';
import { Crimeneslh } from 'src/app/models/crimeneslh';
import { CrimeneslhService } from 'src/app/services/crimeneslh.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PaisResponsive } from '../../interfaces/pais.interface';
import { MapaService } from 'src/app/services/mapa.service';



@Component({
  selector: 'app-crimene-lh',
  templateUrl: './crimene-lh.component.html',
  styleUrls: ['./crimene-lh.component.css']
})
export class CrimeneLhComponent implements OnInit {
  @Input() paisrespuesta:PaisResponsive;
  @Input() crimpais;
  stringJson: any;
  pais$:PaisResponsive;

  crimenes$: Observable<Crimeneslh>;
  crimeneslh: Crimeneslh;
  error: {};
  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  constructor(
    private crimeneslhService: CrimeneslhService,
    private activatedRoute: ActivatedRoute,
    private mapaService:MapaService,
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
      this.getPaisCrimenes(event);

  }


  ngOnInit() {
    //this.getCrimenesbyPais();

  }

  getPaisCrimenes(event:string){


    const code = this.activatedRoute.snapshot.paramMap.get('event');//se llama el id requerido


     this.activatedRoute.params.subscribe( params =>{

       const code = this.crimeneslhService.getCrimenesbyPais(event).subscribe (
         (resp:PaisResponsive) => {

           this.crimpais = resp;
           //console.log(this.paisrespuesta);
           this.stringJson = JSON.stringify(this.crimpais).replace(/['"]+/g, '');
           //console.log("String json object :", this.stringJson);


         }
       )
         return this.crimpais;
     })



   }




  /*getCrimenesbyPais(){
    // sacar el id del post del la url
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      // peticion ajax para sacar los datos del post
      this.crimeneslhService.getCrimenesbyPais(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.crimeneslh = response.crimeneslh;
             console.log(this.crimeneslh);


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

  }*/

}
