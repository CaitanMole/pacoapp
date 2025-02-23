import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonIcon, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlumnosPage implements OnInit {

  alumnos = [
    { nombre: 'Juan Pérez', email: 'juan.perez@utcj.edu' },
    { nombre: 'María López', email: 'maria.lopez@utcj.edu' },
    { nombre: 'Carlos García', email: 'carlos.garcia@utcj.edu' }
  ];

  constructor(private router: Router) {}

  irActividades() {
    this.router.navigate(['/actividades']); // 🔥 Redirige manualmente
  }

  ngOnInit() {
  }

}
