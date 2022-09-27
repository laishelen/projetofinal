import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConsultaClientes } from '../models/consultaclientes';
import { ConsultaCliente } from '../models/consultacliente';
import { MensagemErro } from '../models/mensagemerro';
import { ResultadoConsultaCliente } from '../models/resultadoconsultacliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

    private consultaClientesUrl = 'backend/clientes';
    private consultaClienteUrl = 'backend/consultarcliente';
    private insertClienteUrl = 'backend/inserircliente';
    private updateClienteUrl = 'backend/atualizarcliente';
    private deleteClienteUrl = 'backend/apagarcliente';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getConsultaClientes():Observable<ConsultaClientes>{
        return this.http.get<ConsultaClientes>(this.consultaClientesUrl)
        .pipe(
            catchError(this.handleError<ConsultaClientes>('getConsultaClientes'))
        );
    }

    getConsultaCliente(id:number):Observable<ConsultaCliente>{
        const url = this.consultaClienteUrl+`/${id}`;

        return this.http.get<ConsultaCliente>(url)
        .pipe(
            catchError(this.handleError<ConsultaCliente>('getConsultaCliente'))
        );
    }

    insertCliente(cliente:ResultadoConsultaCliente):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.insertClienteUrl, cliente, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('insertCliente'))
        );
    }

    updateCliente(cliente:ResultadoConsultaCliente):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.updateClienteUrl, cliente, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('updateCliente'))
        );
    }

    deleteCliente(NumeroCliente:number):Observable<MensagemErro>{
        const url = this.deleteClienteUrl+ `/${NumeroCliente}`;
        return this.http.get<MensagemErro>(url)
        .pipe(
            catchError(this.handleError<ConsultaClientes>('deleteClientes'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
