import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastrosPage} from '../pages/cadastros/cadastros';
import { CadastroClientePage} from '../pages/cadastro-cliente/cadastro-cliente';
import { CadatroLivroPage} from '../pages/cadatro-livro/cadatro-livro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastrosPage,
    CadastroClientePage,
    CadatroLivroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastrosPage,
    CadastroClientePage,
    CadatroLivroPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
