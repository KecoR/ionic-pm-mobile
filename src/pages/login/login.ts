import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit() {
    let userData = {
      username: this.username,
      password: this.password,
    };

    console.log(userData);

    this.api.postData(JSON.stringify(userData), 'login').subscribe(data => {
      if(data == "No User") {
        alert("Username tidak terdaftar");
      } else if(data == "Wrong Password") {
        alert("Password yang dimasukan salah")
      } else {
        this.storage.set('user', data);
        alert("Login Berhasil");
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

}
