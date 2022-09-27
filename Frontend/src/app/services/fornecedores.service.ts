import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConsultaFornecedores } from '../models/consultafornecedores';
import { ConsultaFornecedor } from '../models/consultafornecedor';
import { MensagemErro } from '../models/mensagemerro';
import { ResultadoConsultaFornecedor } from '../models/resultadoconsultafornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

    private consultaFornecedoresUrl = 'backend/fornecedores';
    private consultaFornecedorUrl = 'backend/consultarfornecedor';
    private insertFornecedorUrl = 'backend/inserirfornecedor';
    private updateFornecedorUrl = 'backend/atualizarfornecedor';
    private deleteFornecedorUrl = 'backend/apagarfornecedor';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getConsultaFornecedores():Observable<ConsultaFornecedores>{
        return this.http.get<ConsultaFornecedores>(this.consultaFornecedoresUrl)
        .pipe(
            catchError(this.handleError<ConsultaFornecedores>('getConsultaFornecedores'))
        );
    }

    getConsultaFornecedor(id:number):Observable<ConsultaFornecedor>{
        const url = this.consultaFornecedorUrl+`/${id}`;

        return this.http.get<ConsultaFornecedor>(url)
        .pipe(
            catchError(this.handleError<ConsultaFornecedor>('getConsultaFornecedor'))
        );
    }

    insertFornecedor(fornecedor:ResultadoConsultaFornecedor):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.insertFornecedorUrl, fornecedor, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('insertFornecedor'))
        );
    }

    updateFornecedor(fornecedor:ResultadoConsultaFornecedor):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.updateFornecedorUrl, fornecedor, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('updateFornecedor'))
        );
    }

    deleteFornecedor(NumeroFornecedor:number):Observable<MensagemErro>{
        const url = this.deleteFornecedorUrl+ `/${NumeroFornecedor}`;
        return this.http.get<MensagemErro>(url)
        .pipe(
            catchError(this.handleError<ConsultaFornecedores>('deleteFornecedores'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
