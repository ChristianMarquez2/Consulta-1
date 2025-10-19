import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.app',
  appName: 'MiApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,          // No se oculta hasta que tú lo digas
      backgroundColor: '#ffffffff',   // Blanco opaco (ARGB)
      androidScaleType: 'CENTER_CROP' // Ajuste visual del splash
      // showSpinner: true,            // Opcional: spinner de carga
    }
  }
};

export default config;
