import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConsultaProdutos } from '../models/consultaprodutos';
import { ConsultaProduto } from '../models/consultaproduto';
import { MensagemErro } from '../models/mensagemerro';
import { ResultadoConsultaProduto } from '../models/resultadoconsultaproduto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

    private consultaProdutosUrl = 'backend/produtos';
    private consultaProdutoUrl = 'backend/consultarproduto';
    private insertProdutoUrl = 'backend/inserirproduto';
    private updateProdutoUrl = 'backend/atualizarproduto';
    private deleteProdutoUrl = 'backend/apagarproduto';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getConsultaProdutos():Observable<ConsultaProdutos>{
        return this.http.get<ConsultaProdutos>(this.consultaProdutosUrl)
        .pipe(
            catchError(this.handleError<ConsultaProdutos>('getConsultaProdutos'))
        );
    }

    getConsultaProduto(id:number):Observable<ConsultaProduto>{
        const url = this.consultaProdutoUrl+`/${id}`;

        return this.http.get<ConsultaProduto>(url)
        .pipe(
            catchError(this.handleError<ConsultaProduto>('getConsultaProduto'))
        );
    }

    insertProduto(produto:ResultadoConsultaProduto):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.insertProdutoUrl, produto, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('insertProduto'))
        );
    }

    updateProduto(produto:ResultadoConsultaProduto):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.updateProdutoUrl, produto, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('updateProduto'))
        );
    }

    deleteProduto(NumeroProduto:number):Observable<MensagemErro>{
        const url = this.deleteProdutoUrl+ `/${NumeroProduto}`;
        return this.http.get<MensagemErro>(url)
        .pipe(
            catchError(this.handleError<ConsultaProdutos>('deleteProduto'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
