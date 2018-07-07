import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class DataService {

  // to ease things, afs is declared public
  constructor(public afs: AngularFirestore) { }
}
