import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { CadastrosPage} from '../pages/cadastros/cadastros';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //criação do array de páginas, informando quais os seus atributos
  pages: Array<{component: any, title: string, icon: string}>;

  rootPage: any = HomePage;

  constructor(platform: Platform) {

       //array de páginas acessadas pelo menu
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: CadastrosPage, title: 'Cadastros', icon: 'folder'},
      
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //Splashscreen.hide();
    });
  }

  //buscanco o objeto p (página)
  openPage(page: any): void{
    this.rootPage = page.component;
  }


}


