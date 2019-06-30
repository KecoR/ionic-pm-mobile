import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

import { HomePage } from '../home/home';

/**
 * Generated class for the InputnilaipagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputnilaipage',
  templateUrl: 'inputnilaipage.html',
})
export class InputnilaipagePage {

  mahasiswa:any;
  matakuliah:any;
  no:any;
  nilai:any;
  semester:any;
  dataMatkul:any;
  dataMhs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.getMahasiswa();
    this.getMatkul();
  }

  getMahasiswa() {
    this.api.getData('getMahasiswa').subscribe(data => {
      this.mahasiswa = data;
      console.log(data);
    });
  }

  getMatkul() {
    this.api.getData('getMatkul').subscribe(data => {
      this.matakuliah = data;
      console.log(data);
    });
  }

  onChange($event) {
    console.log($event);
  }

  submit() {
    let userData = {
      nim: this.dataMhs,
      matkul: this.dataMatkul,
      nilai: this.nilai,
      smt: this.semester
    };
    
    console.log(userData);

    this.api.postData(JSON.stringify(userData), 'inputNilai').subscribe(data => {
      if(data) {
        alert("Nilai berhasil diinput");
        this.navCtrl.setRoot(HomePage);
      } else {
        alert("Gagal menginput nilai")
        this.navCtrl.setRoot(HomePage);
      }
    })
  }

}
