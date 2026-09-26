  "devDependencies": {
    ...
    "@capacitor/filesystem": "^8.0.0",
    ...
  }

# Описание

Эта библиотека - набор инструментов для работы с файловой системой внутри приложения.

Библиотека предоставляет два класса адаптеров:

- **File** - для работы с файлами,
- **Dir** - для работы с каталогами.

Адаптеры - это удобные внешние интерфейсы для вашего приложения. Они связаны с библиотеками какой-либо среды выполнения - capacitor, electron, nodejs, tauri. Каждая среда выполнения предоставляет свои методы работы с файловой системой, свои интерфейсы. Адаптеры приводят их к общему виду.

Для **electron** есть отдельный дополнительный модуль **electronPathsAPI**, который нужно вызвать в **preload.js**.

И обязательно добавить **electronPathsAPIHandle** в тело метода **app.whenReady**, перед созданием окна:

```
app.whenReady().then(() => {
  ...

  ipcMain.handle('get-path', (_event, pathName) => {
    return app.getPath(pathName);
  });

  createWindow();

  ...
});
```

Для **capacitor** в файл **AndroidManifest.xml** по пути **build\capacitor\android\app\src\main** добавить строки:

```
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```
