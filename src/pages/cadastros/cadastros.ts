import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CadastroClientePage} from '../cadastro-cliente/cadastro-cliente';
import { CadatroLivroPage} from '../cadatro-livro/cadatro-livro';


/*
  Generated class for the Cadastros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastros',
  templateUrl: 'cadastros.html'
})
export class CadastrosPage {
  
  public cadastroCliente = CadastroClientePage;
  public cadastroLivro = CadatroLivroPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
     
  }

  cadastrarCliente(){
    let modalCliente = this.modal.create(CadastroClientePage);
    modalCliente.present();
    
  }

  cadastrarLivro(){
    let modalLivro = this.modal.create(CadatroLivroPage);
    modalLivro.present();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrosPage');
  }
   

}
