import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Params, Router } from '@angular/router';
import { PaisResponsive } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class ViolacionesddhhService {

  public violacionesddhh: string;

  public serverUrl: string;
  public storageUrl: string;
  public identity;
  public token;

  constructor(private http: HttpClient, public router: Router) {
    this.serverUrl = environment.baseUrl;
  }


  getViolacionesddhhs() {
    return this.http.get<PaisResponsive>(this.serverUrl + 'api_violacionesddhh/violacionesddhh/').pipe(
      catchError(this.handleError)
    );
  }

  getViolacionesddhh(code: string) {
    return this.http.get<PaisResponsive>(this.serverUrl + 'api_violacionesddhh/violacionesddhhs/' + code).pipe(
      catchError(this.handleError)
    );
  }

  getViolacionbyPais(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get( this.serverUrl + 'api_violacionesddhh/violacionesddhh/' + code, {headers});

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
