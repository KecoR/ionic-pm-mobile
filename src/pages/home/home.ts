import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { NilaipagePage } from '../nilaipage/nilaipage';
import { IpkpagePage } from '../ipkpage/ipkpage';
import { InputnilaipagePage } from '../inputnilaipage/inputnilaipage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  role:any;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      this.cekUser(user.role);
    });
  }

  cekUser(user) {
    if(user == "MAHASISWA") {
      this.role = 1;
    } else {
      this.role = 0;
    }
  }

  cekNilai() {
    this.navCtrl.push(NilaipagePage);
  }

  cekIpk() {
    this.navCtrl.push(IpkpagePage);
  }

  inputNilai() {
    this.navCtrl.push(InputnilaipagePage);
  }

  logout() {
    if(this.storage.clear()) {
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
