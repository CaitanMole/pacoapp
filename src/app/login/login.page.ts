import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonLabel } from '@ionic/angular/standalone';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton]
})
export class LoginPage implements OnInit {
  correo: string = '';
  contrasena: string = '';
  cargando = false;

  private auth = inject(Auth);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {}

  iniciarSesion() {
    if (this.cargando) return;
    this.cargando = true;

    console.log('Intentando iniciar sesión con:', this.correo, this.contrasena);
    signInWithEmailAndPassword(this.auth, this.correo, this.contrasena)
      .then(({ user }) => {
        console.log('Usuario autenticado:', user);
        this.router.navigate(['/alumnos']);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error.message);
      })
      .finally(() => {
        this.cargando = false;
      });
  }
}
