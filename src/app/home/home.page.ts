import { Component } from '@angular/core';
import { ngModuleJitUrl } from '@angular/compiler';
import { AddNotePage } from '../add-note/add-note.page';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav: NavController) {




  }


addnote(){
  this.nav.navigateForward("add-note");
}
  
    
}
