import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Noticias } from '../models/noticias';
import { Tempo } from '../models/tempo';

@Injectable({
  providedIn: 'root'
})
export class DadosexternosService {

    private rtpNoticiasUrl = "/backend/noticiasrtp";
    private tempoUrl ="/backend/tempo";

    constructor(private http: HttpClient) { }

    getNoticias():Observable<Noticias>{

        return this.http.get<Noticias>(this.rtpNoticiasUrl)
        .pipe(
            catchError(this.handleError<Noticias>('getNoticias'))
        );
    }

    getTempo():Observable<Tempo>{

        return this.http.get<Tempo>(this.tempoUrl)
        .pipe(
            catchError(this.handleError<Tempo>('getTempo'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
