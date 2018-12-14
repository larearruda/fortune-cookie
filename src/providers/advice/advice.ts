import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AdviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdviceProvider {

  private baseApiPath = "https://api.adviceslip.com/";

  constructor(public http: Http) {
    console.log('Hello AdviceProvider Provider');
  }

  getAdvice(){
    console.log(this.baseApiPath+ `advice`);
    return this.http.get(this.baseApiPath+ `advice`);
    
  }

}
