import { Component, OnInit } from '@angular/core';
import { Tempo } from 'src/app/models/tempo';
import { DadosexternosService } from 'src/app/services/dadosexternos.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

    tempo:Tempo={
        "FicheiroTempo":"",
        "TemperaturaAtual":"",
        "TemperaturaMinima":"",
        "TemperaturaMaxima":""
    }

    constructor(private dadosExternos:DadosexternosService) { }

    ngOnInit(): void {
        this.obterTempo();
    }

    obterTempo():void{
        this.dadosExternos.getTempo()
        .subscribe(tempo => {
            this.tempo = tempo;
        });
    }
}
