import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AdviceProvider } from '../../providers/advice/advice';

/**
 * Generated class for the CookiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookie',
  templateUrl: 'cookie.html',
  providers: [ AdviceProvider ]
})
export class CookiePage {

  public advice: any;

  //refresher
  public loader;
	public refresher;
	public isRefreshing: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public adviceProvider: AdviceProvider,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CookiePage');
    this.getFortune();
    
  }

  getFortune(){
    this.presentLoading();
    this.adviceProvider.getAdvice().subscribe(
			data=>{

				const response = (data as any);
				const objeto_response = JSON.parse(response._body);

        this.advice = objeto_response;
        console.log(this.advice);

        //verificar o status do refresher
        if(this.isRefreshing){
					this.refresher.complete();
					this.isRefreshing = false;
				}
			},
			error=>{
				console.log(error);
			});
  }

  doRefresh(refresher) {
		this.refresher = refresher;		
		this.isRefreshing = true;
		this.getFortune();	
  }
  
  presentLoading() {
		this.loader = this.loadingCtrl.create({
		  content: "Make a wish",
		  duration: 1000
		});
		this.loader.present();
  }
  
  // para fechar a janela quando não houver o parametro 'duration' em 'presentLoading'
	closeLoading(){
		this.loader.dismiss;
	}

}
