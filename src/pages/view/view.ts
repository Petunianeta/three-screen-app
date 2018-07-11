import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LIST} from '../../mocks/listmocks';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  

item= '';
ToDoList = LIST ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("variable")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    
  }
  detail(){
    this.navCtrl.push('DetailPage')
  }
}
