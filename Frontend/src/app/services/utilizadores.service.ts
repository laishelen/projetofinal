import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConsultaUtilizadores } from '../models/consultautilizadores';
import { ConsultaUtilizador } from '../models/consultautilizador';
import { MensagemErro } from '../models/mensagemerro';
import { ResultadoConsultaUtilizador } from '../models/resultadoconsultautilizador';
import { RecuperarPassword } from '../models/recuperarepassword';
import { NovaPassword } from '../models/novapassword';

@Injectable({
  providedIn: 'root'
})
export class UtilizadoresService {

    private consultaUtilizadoresUrl = 'backend/utilizadores';
    private consultaUtilizadorUrl = 'backend/consultarutilizador';
    private insertUtilizadorUrl = 'backend/inserirutilizador';
    private updateUtilizadorUrl = 'backend/atualizarutilizador';
    private deleteUtilizadorUrl = 'backend/apagarutilizador';
    private desbloquearContaUrl = 'backend/desbloquearconta';
    private recuperarPasswordUrl ='backend/recuperarpassword';
    private novaPasswordUrl = 'backend/novapassword';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getConsultaUtilizadores():Observable<ConsultaUtilizadores>{
        return this.http.get<ConsultaUtilizadores>(this.consultaUtilizadoresUrl)
        .pipe(
            catchError(this.handleError<ConsultaUtilizadores>('getConsultaUtilizadores'))
        );
    }

    getConsultaUtilizador(id:number):Observable<ConsultaUtilizador>{
        const url = this.consultaUtilizadorUrl+`/${id}`;

        return this.http.get<ConsultaUtilizador>(url)
        .pipe(
            catchError(this.handleError<ConsultaUtilizador>('getConsultaUtilizador'))
        );
    }

    insertUtilizador(utilizador:ResultadoConsultaUtilizador):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.insertUtilizadorUrl, utilizador, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('insertUtilizador'))
        );
    }

    updateUtilizador(utilizador:ResultadoConsultaUtilizador):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.updateUtilizadorUrl, utilizador, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('insertUtilizador'))
        );
    }

    deleteUtilizador(NumeroUtilizador:number):Observable<MensagemErro>{
        const url = this.deleteUtilizadorUrl+ `/${NumeroUtilizador}`;
        return this.http.get<MensagemErro>(url)
        .pipe(
            catchError(this.handleError<MensagemErro>('deleteUtilizadores'))
        );
    }

    desbloquearConta(NumeroUtilizador:number):Observable<MensagemErro>{
        const url = this.desbloquearContaUrl+ `/${NumeroUtilizador}`;
        return this.http.get<MensagemErro>(url)
        .pipe(
            catchError(this.handleError<MensagemErro>('desbloquearConta'))
        );
    }

    recuperarPassword(recuperarPassword:RecuperarPassword):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.recuperarPasswordUrl, recuperarPassword, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('recuperarPassword'))
        );
    }

    novaPassword(NovaPassword:NovaPassword):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.novaPasswordUrl, NovaPassword, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('novaPassword'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
