import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ListautilizadoresComponent } from '../listautilizadores/listautilizadores.component';

@Component({
  selector: 'app-cropper-utilizador',
  templateUrl: './cropper-utilizador.component.html',
  styleUrls: ['./cropper-utilizador.component.css']
})
export class CropperUtilizadorComponent implements OnInit {

    constructor(private listaUtilizadores:ListautilizadoresComponent) { }

    imageChangedEvent: any = '';
    croppedImage: any = '';
    @Input() origem:any='';

    ngOnInit(): void {
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded() {
    }

    cropperReady() {
    }

    loadImageFailed() {
    }

    showImage(){
    }
    
    guardarFoto(){
        this.listaUtilizadores.consultaUtilizador.Resultado[0].Foto=this.croppedImage;
        this.croppedImage='';
        this.imageChangedEvent='';
    }
}
