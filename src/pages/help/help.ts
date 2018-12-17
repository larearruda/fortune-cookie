import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  openWebpage(webpage?: any){

    if(webpage == 'github'){
      window.open("https://github.com/larearruda/fortune-cookie",'_system', 'location=yes');
    }else{
      window.open("https://api.adviceslip.com/",'_system', 'location=yes');
    }
  }

}
