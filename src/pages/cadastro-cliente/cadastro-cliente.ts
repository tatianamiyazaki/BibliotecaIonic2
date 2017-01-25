import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the CadastroCliente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html'
})
export class CadastroClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
