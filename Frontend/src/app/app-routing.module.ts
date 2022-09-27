import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
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
import { LoginComponent } from './pagecomponents/login/login.component';
import { RecuperarpasswordComponent } from './pagecomponents/recuperarpassword/recuperarpassword.component';
import { MensagemComponent } from './pagecomponents/mensagem/mensagem.component';
import { NovoutilizadorComponent } from './pagecomponents/novoutilizador/novoutilizador.component';
import { AtiveasuacontaComponent } from './pagecomponents/ativeasuaconta/ativeasuaconta.component';
import { MensagemenviadaComponent } from './pagecomponents/mensagemenviada/mensagemenviada.component';
import { NovapasswordComponent } from './pagecomponents/novapassword/novapassword.component';

const routes:Routes = [
    { path:'', redirectTo: '/inicio', pathMatch: 'full' },
    { path:'inicio', component: InicioComponent },
    { path:'quemsomos', component: QuemsomosComponent },
    { path:'loja', component: LojaComponent },
    { path:'contactos', component: ContactosComponent },
    { path:'perfil', component: PerfilComponent },
    { path:'pesquisa', component: PesquisaComponent },
    { path:'gestao', component: GestaoComponent },
    { path:'clientes', component: ClientesComponent },
    { path:'fornecedores', component: FornecedoresComponent },
    { path:'produtos', component: ProdutosComponent },
    { path:'utilizadores', component: UtilizadoresComponent },
    { path:'login', component: LoginComponent },
    { path:'recuperarpassword', component:RecuperarpasswordComponent },
    { path:'mensagem', component: MensagemComponent },
    { path:'novoutilizador', component: NovoutilizadorComponent },
    { path:'ativeasuaconta', component: AtiveasuacontaComponent },
    { path:'mensagemenviada', component: MensagemenviadaComponent },
    { path:'novapassword', component: NovapasswordComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
