import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonList, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ActividadesPage implements OnInit {
  actividades$: Observable<any[]> | undefined;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const actividadesRef = collection(this.firestore, 'Actividades');
    this.actividades$ = collectionData(actividadesRef, { idField: 'id' });
  }

  async abrirCamara(actividadId: string, campo: string) {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      console.log(`Foto tomada para ${campo} en la actividad ${actividadId}:`, photo.webPath);
      // Aquí puedes subir la imagen a Firebase Storage y asociarla con la actividad y campo
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  }

  obtenerClaves(actividad: any): string[] {
    return Object.keys(actividad).filter(key => key !== 'id');
  }


}
