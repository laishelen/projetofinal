import { Component, OnInit, Input } from '@angular/core';
import { ConsultaClientes } from 'src/app/models/consultaclientes';
import { ConsultaCliente } from 'src/app/models/consultacliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { ResultadoConsultaCliente } from 'src/app/models/resultadoconsultacliente';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {

    consultaClientes: ConsultaClientes={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroCliente:0,
            Nome:'',
            NIF:'',
            Foto:''
        }]
    };

    @Input() consultaCliente: ConsultaCliente={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroCliente:0,
            Nome:'',
            NIF:'',
            Morada:'',
            CodigoPostal:'',
            Telefone:'',
            EMail:'',
            Foto:''
        }]
    };

    MensagemErro: MensagemErro={
        ErrorCode:0,
        ErrorMessage:''
    }

    constructor(private clientesService: ClientesService) { }

    ngOnInit(): void {
        this.getConsultaClientes();
    }

    getConsultaClientes():void{
        this.clientesService.getConsultaClientes()
            .subscribe(consultaClientes => this.consultaClientes = consultaClientes);
    }

    getConsultaCliente(numeroCliente:number):void{
        this.clientesService.getConsultaCliente(numeroCliente)
            .subscribe(consultaCliente => this.consultaCliente = consultaCliente);
    }

    saveCliente():void{
        console.log(this.consultaCliente.Resultado[0].Foto);
        if(this.consultaCliente.Resultado[0].NumeroCliente==0){
            this.clientesService.insertCliente(this.consultaCliente.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro;
                this.getConsultaClientes();
            });
        } else {
            this.clientesService.updateCliente(this.consultaCliente.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro;
                this.getConsultaClientes();
            });
        }
    }

    deleteCliente(NumeroCliente:number):void{
        this.clientesService.deleteCliente(NumeroCliente)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaClientes();
            });
    }

    mostrarFormularioNovoCliente():void{
        this.consultaCliente={
            ErrorCode:0,
            ErrorMessage:'',
            Resultado:[{
                NumeroCliente:0,
                Nome:'',
                NIF:'',
                Morada:'',
                CodigoPostal:'',
                Telefone:'',
                EMail:'',
                Foto:''
            }]
        };
    }

    mudarFoto():void{
        var fotofile=(<HTMLInputElement>document.getElementById("customFile")).value;
        fotofile=fotofile.replace("C:\\fakepath\\", "");
        this.consultaCliente.Resultado[0].Foto=fotofile;
    }
}
