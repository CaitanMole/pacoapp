import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class MaestrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
