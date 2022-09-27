import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoConsultaUtilizador } from 'src/app/models/resultadoconsultautilizador';
import { UtilizadoresService } from 'src/app/services/utilizadores.service';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-novoutilizador',
  templateUrl: './novoutilizador.component.html',
  styleUrls: ['./novoutilizador.component.css']
})
export class NovoutilizadorComponent implements OnInit {

    novoUtilizador:ResultadoConsultaUtilizador={
        NumeroUtilizador:0,
        PrimeiroNome:"",
        UltimoNome:"",
        Morada:"",
        CodigoPostal:"",
        Telefone:"",
        EMail:"",
        Password:"",
        EstadoConta:"",
        Username:"",
        Foto:""
    }

    MensagemErro:MensagemErro={
        ErrorCode:0,
        ErrorMessage:""
    }

    constructor(private utilizadoresService:UtilizadoresService, private router:Router) { }

    ngOnInit(): void {
    }

    registarNovoUtilizador():void{
        this.utilizadoresService.insertUtilizador(this.novoUtilizador)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro,
                this.router.navigateByUrl('ativeasuaconta');
            });
    }
}
