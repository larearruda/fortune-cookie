import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CookiePage } from '../pages/cookie/cookie';
import { HelpPage } from '../pages/help/help';
import { AdviceProvider } from '../providers/advice/advice';
import { TestePage } from '../pages/teste/teste';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CookiePage,
    HelpPage,
    TestePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CookiePage,
    HelpPage,
    TestePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdviceProvider
  ]
})
export class AppModule {}
