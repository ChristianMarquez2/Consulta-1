import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonicModule } from '@ionic/angular';      // 👈 Import Ionic
import { RouterModule } from '@angular/router';    // 👈 Import Router

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,                                // 👈 Activar Standalone
  imports: [IonicModule, RouterModule]             // 👈 Importar Ionic y Router
})
export class AppComponent {
  constructor() {
    this.init();
  }

  async init() {
    // Espera tus inits (servicios, auth, etc.) y luego:
    await SplashScreen.hide();
  }
}
