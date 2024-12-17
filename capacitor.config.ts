import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.selzen',
  appName: 'Selzen Scanner',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: 'selzen-key.keystore',
      keystoreAlias: 'selzen',
      releaseType: 'AAB',
      minSdkVersion: 21,
      targetSdkVersion: 33,
      versionCode: 1,
      versionName: "1.0.0"
    }
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#2B4C7E",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    }
  }
};

export default config;