import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecuperarPassword } from 'src/app/models/recuperarepassword';
import { UtilizadoresService } from 'src/app/services/utilizadores.service';
import { MensagemErro } from 'src/app/models/mensagemerro';



@Component({
  selector: 'app-recuperarpassword',
  templateUrl: './recuperarpassword.component.html',
  styleUrls: ['./recuperarpassword.component.css']
})
export class RecuperarpasswordComponent implements OnInit {

    RecuperarPassword:RecuperarPassword={
        EMail:""
    }

    MensagemErro:MensagemErro={
        ErrorCode:0,
        ErrorMessage:""
    }

    constructor(private utilizadoresService:UtilizadoresService,private router:Router) { }

    ngOnInit(): void {
    }

    recuperarPassword():void{
        this.utilizadoresService.recuperarPassword(this.RecuperarPassword)
            .subscribe(MensagemErro => {
                this.MensagemErro = MensagemErro,
                this.router.navigateByUrl('mensagemenviada');
            });
    }
}
