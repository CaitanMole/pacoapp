import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getActividades(): Observable<any[]> {
    const actividadesRef = collection(this.firestore, 'Actividades');
    return collectionData(actividadesRef, { idField: 'id' });
  }
}
