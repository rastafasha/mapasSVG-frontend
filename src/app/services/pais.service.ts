import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  HttpHeaders } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import  {catchError, map, tap} from 'rxjs/operators';
import { Params, Router } from '@angular/router';

import { Pais } from '../models/pais';
import {PaisResposive} from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public serverUrl: string;
  public storageUrl: string;
  public pais: string;
  public identity;
  public token;

  public cargando = false;


  constructor(
    private http: HttpClient,
    public router: Router
    ) {
    this.serverUrl = environment.baseUrl;

  }

  getCarteleraPaises(): Observable<PaisResposive>{

    this.cargando = true;
    return this.http.get<PaisResposive>(`${this.serverUrl}/api_pais/paises`,)
    .pipe(
      map( resp => {
        return resp;
      }),
    );


    }

  getPaises(): Observable<any>  {
    return this.http.get<Pais>(this.serverUrl + 'api_pais/paises/').pipe(
      catchError(this.handleError)
    );
  }

  getPaisDetail(code:string){

    return this.http.get<PaisResposive>(`${this.serverUrl}/api_pais/pais/${code}`).pipe(
      catchError(err => of(null))
    )

  }

  getPais(code:string): Observable<PaisResposive> {

    return this.http.get<PaisResposive>(this.serverUrl + 'api_pais/pais/' + code).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
