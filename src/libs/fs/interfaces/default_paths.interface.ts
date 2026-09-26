export interface DefaultPaths<DirDescriptor> {
  app(): DirDescriptor | Promise<DirDescriptor>;
  cache(): DirDescriptor | Promise<DirDescriptor>;
  data(): DirDescriptor | Promise<DirDescriptor>;
  documents(): DirDescriptor | Promise<DirDescriptor>;
  home(): DirDescriptor | Promise<DirDescriptor>;
}

/*

fetch - универсальный способ чтения файлов из папки проекта, но не записи

-- WebApi

A FileSystemHandle or a well known directory (
  "desktop",
  "documents",
  "downloads",
  "music",
  "pictures",
  "videos"
) to open the dialog in.

-- Capacitor

* Каталог «Документы».
* На iOS это каталог документов приложения.
* Используйте этот каталог для хранения пользовательского контента.
* На Android это общедоступная папка «Документы», поэтому она доступна из других приложений.
* На Android 10 она недоступна, если приложение не включает поддержку устаревшего внешнего хранилища.
* добавив `android:requestLegacyExternalStorage="true"` в тег `application`
* в `AndroidManifest.xml`.
* На Android 11 или более поздних версиях приложение может получить доступ только к файлам/папкам, созданным самим приложением.
Documents = "DOCUMENTS"

* Каталог данных.
* На iOS будет использоваться каталог «Документы».
* На Android это каталог, содержащий файлы приложения.
* Файлы будут удалены при удалении приложения.
Data = "DATA"

* Каталог кэша.
* Может быть удален в случае нехватки памяти, поэтому используйте этот каталог для записи файлов, специфичных для приложения.
* которые ваше приложение сможет легко воссоздать.
Cache = "CACHE"

* Внешний каталог.
* На iOS используется каталог документов.
* На Android это каталог на основном общем/внешнем устройстве хранения,
* где приложение может размещать принадлежащие ему постоянные файлы.
* Эти файлы являются внутренними для приложений и обычно не видны
* пользователю как медиафайлы. * Файлы будут удалены при удалении приложения.
External = "EXTERNAL"

Cache [file:///data/user/0/com.fwmakc.ts_vite_project/cache]
Data [file:///data/user/0/com.fwmakc.ts_vite_project/files]

Documents [file:///storage/emulated/0/Documents]
External [file:///storage/emulated/0/Android/data/com.fwmakc.ts_vite_project/files]
ExternalStorage [file:///storage/emulated/0]
ExternalCache [file:///storage/emulated/0/Android/data/com.fwmakc.ts_vite_project/cache]

-- Electron

appData [C:\Users\user\AppData\Roaming]
appPath_dev [C:\dev\games\test\ts-vite-project-test]
appPath_prod [C:\Users\user\AppData\Local\Programs\TS Vite Project\resources\app.asar]
assets_exe_dev [C:\dev\games\test\ts-vite-project-test\node_modules\electron\dist]
assets_exe_prod [C:\Users\user\AppData\Local\Programs\TS Vite Project]
documents [C:\Users\user\Documents]
downloads [C:\Users\user\Downloads]
home [C:\Users\user]
userData [C:\Users\user\AppData\Roaming\TS Vite Project]

-- TAURI 2

import { dataDir } from '@tauri-apps/api/path';
const dataDirPath = await dataDir();
 
appConfigDir
appDataDir
appLocalDataDir
appCacheDir

* - **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
* - **macOS:** Resolves to `$HOME/Library/Caches`.
* - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
cacheDir

* - **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
* - **macOS:** Resolves to `$HOME/Library/Application Support`.
* - **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.
dataDir

 * - **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOCUMENTS_DIR`.
 * - **macOS:** Resolves to `$HOME/Documents`.
 * - **Windows:** Resolves to `{FOLDERID_Documents}`.
documentDir

* - **Linux:** Resolves to `$HOME`.
* - **macOS:** Resolves to `$HOME`.
* - **Windows:** Resolves to `{FOLDERID_Profile}`.
homeDir

* - **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
* - **macOS:** Resolves to `$HOME/Library/Application Support`.
* - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
localDataDir

* - **Windows:** Resolves to the directory that contains the main executable.
* - **Linux:** When running in an AppImage, the `APPDIR` variable will be set to
*   the mounted location of the app, and the resource dir will be `${APPDIR}/usr/lib/${exe_name}`.
*   If not running in an AppImage, the path is `/usr/lib/${exe_name}`.
*   When running the app from `src-tauri/target/(debug|release)/`, the path is `${exe_dir}/../lib/${exe_name}`.
* - **macOS:** Resolves to `${exe_dir}/../Resources` (inside .app).
* - **iOS:** Resolves to `${exe_dir}/assets`.
* - **Android:** Currently the resources are stored in the APK as assets so it's not a normal file system path,
*   we return a special URI prefix `asset://localhost/` here that can be used with the [file system plugin](https://tauri.app/plugin/file-system/),
resourceDir

cache [C:\Users\user\AppData\Local]
data [C:\Users\user\AppData\Roaming]
document [C:\Users\user\Documents]
home [C:\Users\user]
localData [C:\Users\user\AppData\Local]
resource_exe_dev [C:\dev\games\test\ts-vite-project-test\src-tauri\target\release]
resource_exe_prod [C:\Users\user\AppData\Local\TS Vite Project]
appConfig [C:\Users\user\AppData\Roaming\com.fwmakc.ts-vite-project]
appData [C:\Users\user\AppData\Roaming\com.fwmakc.ts-vite-project]
appLocalData [C:\Users\user\AppData\Local\com.fwmakc.ts-vite-project]
appCache [C:\Users\user\AppData\Local\com.fwmakc.ts-vite-project]
*/
