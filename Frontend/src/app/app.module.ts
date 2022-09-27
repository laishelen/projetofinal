import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenugeralComponent } from './components/menugeral/menugeral.component';
import { MenugestaoComponent } from './components/menugestao/menugestao.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { InicioComponent } from './pagecomponents/inicio/inicio.component';
import { QuemsomosComponent } from './pagecomponents/quemsomos/quemsomos.component';
import { LojaComponent } from './pagecomponents/loja/loja.component';
import { ContactosComponent } from './pagecomponents/contactos/contactos.component';
import { PerfilComponent } from './pagecomponents/perfil/perfil.component';
import { PesquisaComponent } from './pagecomponents/pesquisa/pesquisa.component';
import { GestaoComponent } from './pagecomponents/gestao/gestao.component';
import { ClientesComponent } from './pagecomponents/clientes/clientes.component';
import { FornecedoresComponent } from './pagecomponents/fornecedores/fornecedores.component';
import { ProdutosComponent } from './pagecomponents/produtos/produtos.component';
import { UtilizadoresComponent } from './pagecomponents/utilizadores/utilizadores.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { VideoinstitucionalComponent } from './components/videoinstitucional/videoinstitucional.component';
import { NovidadesComponent } from './components/novidades/novidades.component';
import { Faixa1Component } from './components/faixa1/faixa1.component';
import { ConfiancaComponent } from './components/confianca/confianca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { QualidadeComponent } from './components/qualidade/qualidade.component';
import { ConhecimentoComponent } from './components/conhecimento/conhecimento.component';
import { Faixa2Component } from './components/faixa2/faixa2.component';
import { MensageminstitucionalComponent } from './components/mensageminstitucional/mensageminstitucional.component';
import { MontraComponent } from './components/montra/montra.component';
import { FormularioperfilComponent } from './components/formularioperfil/formularioperfil.component';
import { DashboardgestaoComponent } from './components/dashboardgestao/dashboardgestao.component';
import { ListaclientesComponent } from './components/listaclientes/listaclientes.component';
import { ListafornecedoresComponent } from './components/listafornecedores/listafornecedores.component';
import { ListaprodutosComponent } from './components/listaprodutos/listaprodutos.component';
import { ListautilizadoresComponent } from './components/listautilizadores/listautilizadores.component';
import { LoginComponent } from './pagecomponents/login/login.component';
import { RecuperarpasswordComponent } from './pagecomponents/recuperarpassword/recuperarpassword.component';
import { NovapasswordComponent } from './pagecomponents/novapassword/novapassword.component';
import { MensagemComponent } from './pagecomponents/mensagem/mensagem.component';
import { NovoutilizadorComponent } from './pagecomponents/novoutilizador/novoutilizador.component';
import { CropperClienteComponent } from './components/cropper-cliente/cropper-cliente.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperProdutoComponent } from './components/cropper-produto/cropper-produto.component';
import { CropperUtilizadorComponent } from './components/cropper-utilizador/cropper-utilizador.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { TempoComponent } from './components/tempo/tempo.component';
import { CropperNovoutilizadorComponent } from './components/cropper-novoutilizador/cropper-novoutilizador.component';
import { AtiveasuacontaComponent } from './pagecomponents/ativeasuaconta/ativeasuaconta.component';
import { MensagemenviadaComponent } from './pagecomponents/mensagemenviada/mensagemenviada.component';
import { PasswordalteradaComponent } from './pagecomponents/passwordalterada/passwordalterada.component';


@NgModule({
  declarations: [
    AppComponent,
    MenugeralComponent,
    MenugestaoComponent,
    RodapeComponent,
    InicioComponent,
    QuemsomosComponent,
    LojaComponent,
    ContactosComponent,
    PerfilComponent,
    PesquisaComponent,
    GestaoComponent,
    ClientesComponent,
    FornecedoresComponent,
    ProdutosComponent,
    UtilizadoresComponent,
    SliderComponent,
    VideoinstitucionalComponent,
    NovidadesComponent,
    Faixa1Component,
    ConfiancaComponent,
    ExperienciaComponent,
    QualidadeComponent,
    ConhecimentoComponent,
    Faixa2Component,
    MensageminstitucionalComponent,
    MontraComponent,
    FormularioperfilComponent,
    DashboardgestaoComponent,
    ListaclientesComponent,
    ListafornecedoresComponent,
    ListaprodutosComponent,
    ListautilizadoresComponent,
    LoginComponent,
    RecuperarpasswordComponent,
    NovapasswordComponent,
    MensagemComponent,
    NovoutilizadorComponent,
    CropperClienteComponent,
    CropperProdutoComponent,
    CropperUtilizadorComponent,
    NoticiasComponent,
    TempoComponent,
    CropperNovoutilizadorComponent,
    AtiveasuacontaComponent,
    MensagemenviadaComponent,
    PasswordalteradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
