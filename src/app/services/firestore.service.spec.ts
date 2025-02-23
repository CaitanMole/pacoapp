import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // Agregar un usuario a la colección "usuarios"
  async addUser(user: any) {
    const ref = collection(this.firestore, 'usuarios');
    return addDoc(ref, user);
  }

  // Obtener todos los usuarios de la colección "usuarios"
  async getUsers() {
    const ref = collection(this.firestore, 'usuarios');
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
