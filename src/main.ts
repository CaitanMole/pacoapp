
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';
import { addIcons } from 'ionicons';
import { leafOutline, locationOutline, homeOutline, colorPaletteOutline, logoIonic, analyticsOutline, notifications } from 'ionicons/icons';
import { Capacitor } from '@capacitor/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCoWkBYg31tCDU1Jn4oQHbr-8QP_i6w8Es",
  authDomain: "sustentableutcj.firebaseapp.com",
  projectId: "sustentableutcj",
  storageBucket: "sustentableutcj.appspot.com",
  messagingSenderId: "943075994570",
  appId: "1:943075994570:web:6e0316656d03d9bcf53d33",
  measurementId: "G-C4YEHQ4LPB"
};

addIcons({
  'leaf-outline': leafOutline,
  'location-outline': locationOutline,
  'home-outline': homeOutline,
  'color-palette-outline': colorPaletteOutline,
  'logo-ionic': logoIonic,
  'analytics-outline': analyticsOutline,
  'notifications': notifications
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => {
      try {
        return getApp();
      } catch {
        return initializeApp(firebaseConfig);
      }
    }),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideAppCheck(() => {
      const app = getApp();
      const provider = new ReCaptchaEnterpriseProvider('1231312');
      return initializeAppCheck(app, { provider, isTokenAutoRefreshEnabled: true });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideVertexAI(() => getVertexAI()),
  ],
}).then(() => {
  console.log("App inicializada con Capacitor:", Capacitor.isNativePlatform());
}).catch(err => console.error("Error al iniciar la app:", err));
