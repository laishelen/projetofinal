import { Component, OnInit } from '@angular/core';
import { ConsultaFornecedores } from '../../models/consultafornecedores';
import { ConsultaFornecedor } from '../../models/consultafornecedor'; 
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { MensagemErro } from '../../models/mensagemerro';


@Component({
  selector: 'app-listafornecedores',
  templateUrl: './listafornecedores.component.html',
  styleUrls: ['./listafornecedores.component.css']
})
export class ListafornecedoresComponent implements OnInit {

    consultaFornecedores: ConsultaFornecedores={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroFornecedor:0,
            Nome:'',
            NIPC:''
        }]
    };

    consultaFornecedor: ConsultaFornecedor={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroFornecedor:0,
            Nome:'',
            NIPC:'',
            Morada:'',
            CodigoPostal:'',
            Telefone:'',
            EMail:''
        }]
    };

    MensagemErro: MensagemErro={
        ErrorCode:0,
        ErrorMessage:''
    }



    constructor(private fornecedoresService:FornecedoresService) { }

    ngOnInit(): void {
        this.getConsultaFornecedores()
    }

    getConsultaFornecedores():void{
        this.fornecedoresService.getConsultaFornecedores()
            .subscribe(consultaFornecedores => this.consultaFornecedores = consultaFornecedores);
    }

    getConsultaFornecedor(numeroFornecedor:number):void{
        this.fornecedoresService.getConsultaFornecedor(numeroFornecedor)
            .subscribe(consultaFornecedor => this.consultaFornecedor = consultaFornecedor);
    }

    saveFornecedor():void{
        if(this.consultaFornecedor.Resultado[0].NumeroFornecedor==0){
            this.fornecedoresService.insertFornecedor(this.consultaFornecedor.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaFornecedores();
            });
        } else {
            this.fornecedoresService.updateFornecedor(this.consultaFornecedor.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaFornecedores();
            });
        }
    }

    deleteFornecedor(NumeroFornecedor:number):void{
        this.fornecedoresService.deleteFornecedor(NumeroFornecedor)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaFornecedores();
            });
    }

    mostrarFormularioNovoFornecedor():void{
        this.consultaFornecedor={
            ErrorCode:0,
            ErrorMessage:'',
            Resultado:[{
                NumeroFornecedor:0,
                Nome:'',
                NIPC:'',
                Morada:'',
                CodigoPostal:'',
                Telefone:'',
                EMail:''
            }]
        };
    }
}
