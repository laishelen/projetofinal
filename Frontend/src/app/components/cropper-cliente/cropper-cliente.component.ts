import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ListaclientesComponent } from '../listaclientes/listaclientes.component';

@Component({
  selector: 'app-cropper-cliente',
  templateUrl: './cropper-cliente.component.html',
  styleUrls: ['./cropper-cliente.component.css']
})
export class CropperClienteComponent implements OnInit {

    constructor(private listaClientes:ListaclientesComponent) { }

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
        this.listaClientes.consultaCliente.Resultado[0].Foto=this.croppedImage;
        this.croppedImage='';
        this.imageChangedEvent='';
    }

}
