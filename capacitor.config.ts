import type { CapacitorConfig } from '@capacitor/cli';

import packageJson from './package.json' with { type: 'json' };

const author = String(packageJson.author?.name || packageJson.author || '')
.toLowerCase()
.replace(/[\W_]+/giu, '_');
const name  = packageJson.name.replace(/[\W_]+/giu, '_');
const productName = packageJson.productName;

const config: CapacitorConfig = {
  appId: `com.${author}.${name}`,
  appName: `${productName}`,
  webDir: 'dist',
  android: {
    path: 'build/capacitor/android',
    includePlugins: [
      '@capacitor/filesystem',
    ],
  },
  ios: {
    path: 'build/capacitor/ios',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
    },
    Filesystem: {
      /*
      overwrite: true,
      logEnabled: true,
      android: {
        // Разрешить доступ к внешнему хранилищу
        allowExternalStorage: true,
        // Путь во внешнем хранилище
        externalStoragePath: 'Android/data/com.example.app/files',
        // Альтернативный путь для публичных файлов
        publicStoragePath: 'Documents/MyApp',
        // Разрешить доступ к Downloads, Pictures и т.д.
        accessibleDirectories: [
          'DOWNLOADS',
          'PICTURES',
          'DOCUMENTS',
          'MOVIES',
          'MUSIC'
        ],
        // Автоматически запрашивать permissions
        requestPermissions: true,
      },
      ios: {
        sharedContainerIdentifier: 'group.com.example.app',
        directory: 'DOCUMENTS',
        iCloudContainer: false,
      },
      */
    },
  },
};

export default config;
