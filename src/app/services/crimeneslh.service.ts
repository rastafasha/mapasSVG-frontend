import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Params, Router } from '@angular/router';
import { environment } from '../../environments/environment';
//import { Crimeneslh } from '../models/crimeneslh';
import { PaisResposive } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class CrimeneslhService {

  public serverUrl: string;
  public storageUrl: string;
  public identity;
  public token;

  public crimeneslh: string;


  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
  }

  getCrimeneslhs() {
    return this.http.get<PaisResposive>(this.serverUrl + 'api_crimeneslh/crimeneslhs/').pipe(
      catchError(this.handleError)
    );
  }

  getCrimeneslh(code: string) {
    return this.http.get<PaisResposive>(this.serverUrl + 'api_crimeneslh/crimeneslhs/' + code).pipe(
      catchError(this.handleError)
    );
  }

  getCrimenesbyPais(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get( this.serverUrl + 'api_crimeneslh/crimeneslh/' + code, {headers});


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
