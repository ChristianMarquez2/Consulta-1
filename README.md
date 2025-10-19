# 📌 MiAplicaciónX

Aplicación móvil desarrollada con **Ionic Angular** y **Capacitor**, compilada para Android y configurada con permisos nativos, ícono personalizado, splash screen y generación de APK lista para instalación en dispositivos reales.

---

## 🚀 Tecnologías Utilizadas

- **Ionic** (Framework UI híbrido)
- **Angular** (Frontend SPA)
- **Capacitor** (Acceso a funcionalidades nativas)
- **Android Studio** (Compilación nativa y generación de APK)
- **Node / npm**

---

## 📌 Características del Proyecto

- Aplicación híbrida lista para Android
- Permisos configurados en `AndroidManifest.xml`:
  - `INTERNET`
  - `CAMERA`
  - `READ/WRITE STORAGE`
  - `ACCESS_NETWORK_STATE`
- Ícono personalizado generado con `capacitor-assets`
- Splash Screen configurado con `@capacitor/splash-screen`
- Compatibilidad con Android 12+
- APK funcional incluida en el repositorio

---

## ✅ Requisitos Previos

Instalar lo siguiente:

| Requisito | Versión recomendada |
|-----------|--------------------|
| Node.js | 16+ |
| Ionic CLI | 7+ |
| Capacitor | 5/6 |
| Android Studio | Última versión |
| Java SDK | 17 |

---

## 🛠️ Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone <URL_DE_TU_REPOSITORIO>
cd MiAplicaciónX

# 2. Instalar dependencias
npm install

# 3. Ejecutar en navegador (opcional)
ionic serve

Compilación Web + Sincronización con Android
# Construir app web (genera carpeta www/)
ionic build

# Sincronizar con Android
npx cap sync android

# Abrir Android Studio
npx cap open android


📌 Generación de APK (Android Studio)

Abrir el proyecto con:

npx cap open android


En Android Studio ir a:

Build > Build Bundle(s) / APK(s) > Build APK(s)


APK generado en:

android/app/release/app-release.apk

📌 Permisos del AndroidManifest
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

📌 Configuración Splash Screen
import { SplashScreen } from '@capacitor/splash-screen';

await SplashScreen.hide();

📌 Generación de Íconos y Splash
npm install -D @capacitor/assets
npx capacitor-assets generate --android

📂 Estructura del Proyecto
MiAplicaciónX/
 ├── android/
 ├── src/
 ├── www/
 ├── capacitor.config.ts
 ├── package.json
 └── README.md

📦 APK Incluida

El archivo APK funcional está disponible en:

/apk/MiAplicaciónX.apk

🧑‍💻 Autor

Christian
