import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NilaipagePage } from '../pages/nilaipage/nilaipage';
import { IpkpagePage } from '../pages/ipkpage/ipkpage';
import { InputnilaipagePage } from '../pages/inputnilaipage/inputnilaipage';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NilaipagePage,
    IpkpagePage,
    InputnilaipagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NilaipagePage,
    IpkpagePage,
    InputnilaipagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
