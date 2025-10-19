# 📌 MiAplicaciónX

Aplicación móvil desarrollada con **Ionic Angular** y **Capacitor**, compilada para Android, con consumo de API de League of Legends y configurada con permisos nativos, ícono personalizado, splash screen y generación de APK lista para instalación en dispositivos reales.

---

## 🚀 Tecnologías Utilizadas

- **Ionic** (Framework UI híbrido)
- **Angular Standalone** (Frontend SPA)
- **Capacitor** (Acceso a funcionalidades nativas)
- **Android Studio** (Compilación nativa y generación de APK)
- **Node / npm**
- **League of Legends Data Dragon API** (Consumo de datos de campeones)

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
- **Consumo dinámico de API para mostrar información de Jhin**
- **Pantalla con detalle de habilidades (Pasiva, Q, W, E, R)**
- APK funcional incluida en el repositorio

---

## 🎮 Integración con League of Legends

Este proyecto consume datos oficiales desde la API estática **Data Dragon**, por ejemplo:

| Recurso | URL |
|---------|-----|
| Info de Jhin | `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion/Jhin.json` |
| Splash | `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg` |
| Iconos de habilidades | `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/` |

Pantallas incluidas:

| Pantalla | Descripción |
|----------|------------|
| **Home** | Muestra splash, nombre, título y lore de Jhin |
| **Habilidades** | Muestra pasiva + habilidades con ícono y descripción |

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
git clone https://github.com/ChristianMarquez2/Consulta-1.git
cd MiAplicaciónX

# 2. Instalar dependencias
npm install

# 3. Ejecutar en navegador (opcional)
ionic serve


📌 Compilación Web + Sincronización con Android
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
/APK

### 📸 Capturas de Pantalla

**Inicio (Jhin – Lore)**  
![Inicio](https://github.com/user-attachments/assets/60c7ef2a-7e72-46b9-b38d-5115d7a77e96)

**Habilidades (Q, W, E, R + Pasiva)**  
![Habilidades](https://github.com/user-attachments/assets/7b88df7d-e243-4fba-99dc-7eb9c077f55a)

**Análisis de la Aplicación**  
![Análisis](https://github.com/user-attachments/assets/3b77d227-33d8-4e73-8a40-560669e3503d)

**Instalación de la App en Android**  
![Instalación](https://github.com/user-attachments/assets/c2685925-2f0b-4597-9540-12cd5f8562fd)


🧑‍💻 Autor

Christian Márquez


