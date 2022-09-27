import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormularioperfilComponent } from '../formularioperfil/formularioperfil.component';

@Component({
  selector: 'app-cropper-perfil',
  templateUrl: './cropper-perfil.component.html',
  styleUrls: ['./cropper-perfil.component.css']
})
export class CropperPerfilComponent implements OnInit {

    constructor(private formularioPerfil:FormularioperfilComponent) { }

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
        this.formularioPerfil.consultaUtilizador.Resultado[0].Foto=this.croppedImage;
        this.croppedImage='';
        this.imageChangedEvent='';
    }

}
