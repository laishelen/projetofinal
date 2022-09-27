import { Component, OnInit } from '@angular/core';
import { ConsultaUtilizadores } from 'src/app/models/consultautilizadores';
import { ConsultaUtilizador } from 'src/app/models/consultautilizador';
import { UtilizadoresService } from 'src/app/services/utilizadores.service';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-listautilizadores',
  templateUrl: './listautilizadores.component.html',
  styleUrls: ['./listautilizadores.component.css']
})
export class ListautilizadoresComponent implements OnInit {

    consultaUtilizadores: ConsultaUtilizadores={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroUtilizador:0,
            Nome: '',
            Username: '',
            Foto: '',
            EstadoConta: ''
        }]
    };

    consultaUtilizador: ConsultaUtilizador={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroUtilizador:0,
            PrimeiroNome:'',
            UltimoNome:'',
            Morada:'',
            CodigoPostal:'',
            Telefone:'',
            EMail:'',
            Password:'',
            EstadoConta:'',
            Username:'',
            Foto:''
        }]
    }

    MensagemErro: MensagemErro={
        ErrorCode:0,
        ErrorMessage:''
    }

    constructor(private utilizadoresService: UtilizadoresService) { }

    ngOnInit(): void {
        this.getConsultaUtilizadores();
    }

    getConsultaUtilizadores():void{
        this.utilizadoresService.getConsultaUtilizadores()
            .subscribe(consultaUtilizadores => this.consultaUtilizadores = consultaUtilizadores);
    }

    getConsultaUtilizador(numeroUtilizador:number):void{
        this.utilizadoresService.getConsultaUtilizador(numeroUtilizador)
            .subscribe(consultaUtilizador => this.consultaUtilizador = consultaUtilizador);
    }

    saveUtilizador():void{
        if(this.consultaUtilizador.Resultado[0].NumeroUtilizador==0){
            this.utilizadoresService.insertUtilizador(this.consultaUtilizador.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaUtilizadores();
            });
        } else {
            this.utilizadoresService.updateUtilizador(this.consultaUtilizador.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaUtilizadores();
            });
        }
    }

    deleteUtilizador(NumeroUtilizador:number):void{
        this.utilizadoresService.deleteUtilizador(NumeroUtilizador)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaUtilizadores();
            });
    }

    mostrarFormularioNovoUtilizador():void{
        this.consultaUtilizador={
            ErrorCode:0,
            ErrorMessage:'',
            Resultado:[{
                NumeroUtilizador:0,
                PrimeiroNome:'',
                UltimoNome:'',
                Morada:'',
                CodigoPostal:'',
                Telefone:'',
                EMail:'',
                Password:'',
                Username:'',
                EstadoConta:'',
                Foto:''
            }]
        };
    }

    mudarFoto():void{
        var fotofile=(<HTMLInputElement>document.getElementById("customFile")).value;
        fotofile=fotofile.replace("C:\\fakepath\\", "");
        this.consultaUtilizador.Resultado[0].Foto=fotofile;
    }

    desbloquearConta(NumeroUtilizador:number):void{
        this.utilizadoresService.desbloquearConta(NumeroUtilizador)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro;
                this.getConsultaUtilizadores();
            });
    }
}
