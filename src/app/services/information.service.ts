import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) { }

  //get information by id
  getInforById(id:string): Observable<any>{
    const docRef = this.afs.collection('members').doc(id);
    return docRef.valueChanges();
  }
} 