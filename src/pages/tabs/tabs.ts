import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CookiePage } from '../cookie/cookie';
import { HelpPage } from '../help/help';
import { TestePage } from '../teste/teste';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  cookieTab = CookiePage;
  cookieTabTitle = "Take your fortune";

  helpTab = HelpPage;
  helpTabTitle = "About";

  testeTab = TestePage;
  testeTabTitle = "Teste Cards";

  color: string = "primary";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  selectCookie(){
    this.color = "primary";
  }

  selectHelp(){
    this.color = "danger";
  }

}
