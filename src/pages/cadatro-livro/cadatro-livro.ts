import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the CadatroLivro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadatro-livro',
  templateUrl: 'cadatro-livro.html'
})
export class CadatroLivroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadatroLivroPage');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
