import { Component, OnInit } from '@angular/core';
import { ConsultaProdutos } from 'src/app/models/consultaprodutos';
import { ConsultaProduto } from 'src/app/models/consultaproduto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css']
})
export class ListaprodutosComponent implements OnInit {

    consultaProdutos: ConsultaProdutos={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroProduto:0,
            Designacao:'',
            PrecoUnitario:0,
            Foto:''
        }]
    };

    consultaProduto: ConsultaProduto={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[{
            NumeroProduto:0,
            Designacao:'',
            Descricao:'',
            UnidadeMedida:'',
            PrecoUnitario:0,
            TaxaIVA:0,
            Foto:''
        }]
    }

    MensagemErro: MensagemErro={
        ErrorCode:0,
        ErrorMessage:''
    }

    constructor(private produtosService: ProdutosService) { }

    ngOnInit(): void {
        this.getConsultaProdutos();
    }

    getConsultaProdutos():void{
        this.produtosService.getConsultaProdutos()
            .subscribe(consultaProdutos => this.consultaProdutos = consultaProdutos);
    }

    getConsultaProduto(numeroProduto:number):void{
        this.produtosService.getConsultaProduto(numeroProduto)
            .subscribe(consultaProduto => this.consultaProduto = consultaProduto);
    }

    saveProduto():void{
        if(this.consultaProduto.Resultado[0].NumeroProduto==0){
            this.produtosService.insertProduto(this.consultaProduto.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro;
                this.getConsultaProdutos();
            });
        } else {
            this.produtosService.updateProduto(this.consultaProduto.Resultado[0])
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro;
                this.getConsultaProdutos();
            });
        }
    }

    deleteProduto(NumeroProduto:number):void{
        this.produtosService.deleteProduto(NumeroProduto)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.getConsultaProdutos();
            });
    }

    mostrarFormularioNovoProduto():void{
        this.consultaProduto={
            ErrorCode:0,
            ErrorMessage:'',
            Resultado:[{
                NumeroProduto:0,
                Designacao:'',
                Descricao:'',
                UnidadeMedida:'',
                PrecoUnitario:0,
                TaxaIVA:0,
                Foto:''
            }]
        };
    }

    mudarFoto():void{
        var fotofile=(<HTMLInputElement>document.getElementById("customFile")).value;
        fotofile=fotofile.replace("C:\\fakepath\\", "");
        this.consultaProduto.Resultado[0].Foto=fotofile;
    }
}
