import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myString:string ="Example 1 - This is just a string";
  public otherPage:any = OtherPage;
  public myJSON:any = {text:''};

  constructor(public navCtrl: NavController) {

  }
  gotoOtherPage():void{
    this.navCtrl.push(OtherPage,{text:"Ejemplo 3-objeto"})
  }

}
