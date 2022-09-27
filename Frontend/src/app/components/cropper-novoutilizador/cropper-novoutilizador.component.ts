import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NovoutilizadorComponent } from 'src/app/pagecomponents/novoutilizador/novoutilizador.component';

@Component({
  selector: 'app-cropper-novoutilizador',
  templateUrl: './cropper-novoutilizador.component.html',
  styleUrls: ['./cropper-novoutilizador.component.css']
})
export class CropperNovoutilizadorComponent implements OnInit {

    constructor(private NovoUtilizador:NovoutilizadorComponent) { }

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
        this.NovoUtilizador.novoUtilizador.Foto=this.croppedImage;
        this.croppedImage='';
        this.imageChangedEvent='';
    }

}
