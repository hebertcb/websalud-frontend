import { Injectable } from '@angular/core';
import { Red } from '../models/red';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  redesList: AngularFireList<any>;
  selectedRed: Red = new Red();

  constructor(private firebase: AngularFireDatabase) {}

  getRedes(){
    return this.redesList=this.firebase.list('redes');
  }

  insertRed(red: Red){
    this.redesList.push(
      {
        red: red.red,
        director: red.director,
        celular: red.celular
      });
  }

  updateRed(red: Red){
    this.redesList.update(red.$key,{
      red: red.red,
      director: red.director,
      celular: red.celular
    })
  }

  deleteRed($key: string){
    this.redesList.remove($key);
  }
}
