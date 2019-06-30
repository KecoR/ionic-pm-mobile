import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the NilaipagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nilaipage',
  templateUrl: 'nilaipage.html',
})
export class NilaipagePage {

  nim:any;
  is_nilai:any;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      this.nim = user.username;
    });
  }

  onChange($event) {
    console.log($event);
    this.nilai($event);
  }

  nilai(smt) {
    let userData = {
      nim: this.nim,
      smt: smt
    };
    
    this.api.postData(JSON.stringify(userData), 'cekNilai').subscribe(data => {
      if(data.length > 0) {
        this.data = data;
        this.is_nilai = 1;
        console.log(this.data);
      } else {
        this.is_nilai = 0;
      }
    })
  }

}
