import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { NovaPassword } from 'src/app/models/novapassword';
import { UtilizadoresService } from 'src/app/services/utilizadores.service';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-novapassword',
  templateUrl: './novapassword.component.html',
  styleUrls: ['./novapassword.component.css']
})
export class NovapasswordComponent implements OnInit {

    NovaPassword:NovaPassword={
        ChaveRecuperacaoPassword:"",
        Password:""
    }

    MensagemErro:MensagemErro={
        ErrorCode:0,
        ErrorMessage:""
    }

    constructor(private utilizadoresService:UtilizadoresService, private route:ActivatedRoute, private router:Router) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            let crp=params.get("crp")
            if(crp!=null){
                this.NovaPassword.ChaveRecuperacaoPassword =crp;
            }
        })
    }

    atualizarPassword():void{
        this.utilizadoresService.novaPassword(this.NovaPassword)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro
                this.router.navigateByUrl('passwordalterada');
        });
    }
}
