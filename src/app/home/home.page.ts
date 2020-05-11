import { Component } from '@angular/core';
import { ngModuleJitUrl } from '@angular/compiler';
import { AddNotePage } from '../add-note/add-note.page';
import { NavController, NavParams } from '@ionic/angular';
import { NoteServiceService } from '../note-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 notes: {title: string}[] = [];
  constructor(public nav: NavController, private noteService: NoteServiceService ) {
}

ionViewwWillEnter(){ this.notes=this.getAllnotes()}
addnote(){
  this.nav.navigateForward("add-note");
}
  getAllnotes(){return this.noteService.getAll()}
    
}
