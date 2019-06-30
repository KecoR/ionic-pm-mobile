import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the IpkpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ipkpage',
  templateUrl: 'ipkpage.html',
})
export class IpkpagePage {

  smt1:any;
  smt2:any;
  smt3:any;
  smt4:any;
  smt5:any;
  smt6:any;
  smt7:any;
  smt8:any;
  totIpk:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      this.ipk(user.username);
    });
  }

  ipk(nim) {
    let userData = {
      nim: nim
    };
    
    this.api.postData(JSON.stringify(userData), 'cekIpk').subscribe(data => {
      if(data) {
        this.smt1 = data.smt1;
        this.smt2 = data.smt2;
        this.smt3 = data.smt3;
        this.smt4 = data.smt4;
        this.smt5 = data.smt5;
        this.smt6 = data.smt6;
        this.smt7 = data.smt7;
        this.smt8 = data.smt8;
        this.totIpk = data.ipk;
      }
    })
  }

}
