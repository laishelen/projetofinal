import { Component, OnInit } from '@angular/core';
import { ResultadoConsultaUtilizador } from 'src/app/models/resultadoconsultautilizador';
import { UtilizadoresService } from 'src/app/services/utilizadores.service';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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

    constructor(private utilizadoresService:UtilizadoresService) { }

    ngOnInit(): void {
    }

    

}
