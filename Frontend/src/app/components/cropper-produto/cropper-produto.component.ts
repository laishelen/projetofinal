import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ListaprodutosComponent } from '../listaprodutos/listaprodutos.component';

@Component({
  selector: 'app-cropper-produto',
  templateUrl: './cropper-produto.component.html',
  styleUrls: ['./cropper-produto.component.css']
})
export class CropperProdutoComponent implements OnInit {

    constructor(private listaProdutos:ListaprodutosComponent) { }

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
        this.listaProdutos.consultaProduto.Resultado[0].Foto=this.croppedImage;
        this.croppedImage='';
        this.imageChangedEvent='';
    }
}
