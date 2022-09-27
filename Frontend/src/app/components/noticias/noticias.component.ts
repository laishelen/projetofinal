import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Noticias } from 'src/app/models/noticias';
import { DadosexternosService } from 'src/app/services/dadosexternos.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

    noticias:Noticias={
        "Noticias":[
            {
                Titulo:'',
                Corpo:''
            }
        ]
    }

    constructor(private dadosExternos: DadosexternosService) { }

    ngOnInit(): void {
        this.obterNoticias();
    }

    obterNoticias():void{
        this.dadosExternos.getNoticias()
        .subscribe(noticias => {
            this.noticias = noticias;
            console.log(noticias);
        });
    }

}
