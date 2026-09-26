# Шаблон для приложений

Шаблон поддерживает мультиплатформенную разработку приложений под Web / Windows / MacOS / Linux / Android / IOS.

- TypeScript, Vite,
- сборка под desktop с помощью Electron или Tauri,
- сборка под mobile с помощью Capacitor,
- автопроверки и форматирование Biome, ESLint, Prettier,
- автотесты Vitest,
- модули ECMAScript (вместо CommonJS),
- стандарт ES2022.

[![npm version](https://badge.fury.io/js/create-ts-vite-project.svg)](https://www.npmjs.com/package/create-ts-vite-project)
[![Build Status](https://github.com/fwmakc/ts-vite-project/actions/workflows/ci.yml/badge.svg)](https://github.com/fwmakc/ts-vite-project/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Быстрый запуск

Выполняем

```
yarn create ts-vite-project
# npm create ts-vite-project
```

И следуем указаниям в консоли.

Запуск в режиме разработки:

```
yarn dev
# npm run dev
```

Сборка проекта:

```
yarn build
# npm run build
```

> Во время сборки запускается линтер, прохождение тестов, компиляция TypeScript и минификация.

Можно выполнить только компиляцию:

```
yarn compile
# npm run compile
```

Запуск:

```
yarn preview
# npm run preview
```

# Релиз и версионирование

Для автоматического управления версиями используется **semantic-release**. При слиянии в ветку **main** автоматически:

- определяется следующая версия на основе коммитов в формате Conventional Commits,
- создается релиз в GitHub или GitLab,
- обновляется файл **CHANGELOG.md**.

## Формат коммитов

- `BREAKING CHANGE:` — создаст Major версию (1.0.0 → 2.0.0),
- `feat:` — новая функция (minor version 1.0.0 → 1.1.0),
- `fix:` — исправление бага (patch version 1.0.0 → 1.0.1),
- `docs:` — изменение документации (без релиза),
- `refactor:` — рефакторинг (patch или без релиза),
- `perf:` — улучшение производительности (patch version 1.0.0 → 1.0.1),
- `test:` — добавление тестов (без релиза),
- `revert:` — откаты изменений (без релиза),
- `style:` — стили и оформление (без релиза),
- `chore:` — обновление зависимостей (без релиза).

## Ручной релиз

Для локального релиза выполните:

```bash
npm run release
```

Не забудьте установить переменные окружения `GITHUB_TOKEN` или `GITLAB_TOKEN`.

# Параметры запуска

Чтобы управлять приложением в зависимости от платформы, мы ввели объект **APP**.

Он содержит параметры со значениями true/false.

Приложение, с помощью которого была сделана сборка:

- isCapacitor,
- isElectron,
- isTauri,
- isWeb.

Платформа, на которой выполняется приложение:

- isBrowser,
- isDesktop,
- isMobile.

Примеры использования:

```
import { APP } from './app';

console.log(APP);
console.log(APP.isWeb);

const { isWeb } = APP;
console.log(isWeb === true);
```

Эти параметры определяются в зависимости от установленных при сборке переменных окружения:

- VITE_BUILD_TARGET,
- VITE_RUNTIME_PLATFORM.

Обычный запуск:

- dev,
- build

не задает значения переменным окружения, и в **APP** устанавливаются значения:

- isWeb: true,
- isBrowser: true.

Другие скрипты:

- compile - компиляция без запуска линтера и автотестов,
- preview - запуск собранного приложения в браузере,
- lint - запуск линтера,
- test - запуск автотестов.

В секции **scripts** файла **package.json** прописана компиляция с предустановленными параметрами:

- capacitor:compile,
- electron:compile,
- tauri:compile.

> Компиляция с нужными параметрами уже прописана в скрипты сборки.

> Обратите внимание, здесь запускается только компиляция, без линтера и автотестов. Это сделано для ускорения. Предполагается, что на момент сборки проекта, программа уже отлажена и не нуждается в дополнительных проверках.

Скрипты для **Capacitor**.

Служебные:

- capacitor:android - добавляет платформу **Android**,
- capacitor:ios - добавляет платформу **IOS**,
- capacitor:make - копирует собранное приложение в платформы для последующей сборки и создает все нужные иконки и значки,
- capacitor:debug - собирает приложение в режиме отладки,
- capacitor:release - собирает готовое, но не подписанное приложение.

Для сборки:

- capacitor:dev - запускает автоматическую сборку приложения в режиме отладки,
- capacitor:build - запускает автоматическую сборку готового, но не подписанного приложения.

Скрипты для **Electron**:

- electron:preview - запускает приложение в режиме предварительного просмотра,
- electron:build - собирает приложение с помощью **Electron Builder**,
- electron:make - собирает приложение с помощью **Electron Forge**.

Скрипты для **Tauri**:

- tauri:init - запускает инициализацию **tauri**,
- tauri:dev - запускает приложение для предварительного просмотра и отладки,
- tauri:build - собирает готовое приложение.

# Билд под десктопные устройства

## Общие настройки

Следующие настройки берутся из **package.json**:

- name, имя пакета,
- productName, название приложения,
- version, версия,
- author, автор,
- description, описание.

## Electron Builder

Это более классический установщик.

За билд отвечает **electron builder**, файл настроек **electron-builder.config.js**.

Общий конфиг для всех устройств задается в корневых полях.

За билд под ОС **Windows** отвечает секция **win**. В поле **target** указан **nsis**.

Группа **nsis** отвечает за настройки этого установщика.

Собираем приложение под десктоп

```
yarn electron:build
```

Готовое приложение будет лежать в каталоге

```
build/electron-builder
```

## Electron Forge

Это более новый установщик.

За билд отвечает **electron forge**, файл настроек **forge.config.js**.

Общий конфиг для всех устройств задается в секции **packagerConfig**:

- icon, иконка приложения,
- asar, упаковщик ресурсов,
- asarUnpack, внутренние ресурсы, которые будут запакованы,
- extraResource, внешние ресурсы, которые не будут оставлены снаружи приложения.

За билд под ОС **Windows** отвечает **maker-squirrel**.

Здесь прописаны иконки:

- iconUrl, намеренно оставлена пустой,
- setupIcon, иконка для установки,
- loadingGif, изображение во время установки.

и другие настройки.

Собираем приложение под десктоп

```
yarn electron:make
```

Готовое приложение будет лежать в каталоге

```
build/electron-forge
```

## Билд для MacOS

Сборка производится только на устройствах Mac с установленной средой разработки XCode.

> следующая информация не проверена

Добавить в **forge.config.js**, в секцию **packagerConfig**:

```
  appCategoryType: 'public.app-category.productivity',
  osxSign: {
    identity: 'Developer ID Application: Your Name (TEAM_ID)',
    'hardened-runtime': true,
    entitlements: 'entitlements.plist',
    'entitlements-inherit': 'entitlements.plist',
    'signature-flags': 'library',
  },
  osxNotarize: {
    tool: 'notarytool',
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_PASSWORD,
    teamId: process.env.APPLE_TEAM_ID,
  },
```

Упрощенная конфигурация (без подписи):

```
  packagerConfig: {
    osxSign: {},
    osxNotarize: {
      tool: 'notarytool',
    },
  },
```

Сборка приложения:

```
# Только упаковать приложение (без установщиков)
npm run package

# Создать установщики (DMG, ZIP)
npm run make

# Собрать только для macOS
npm run make -- --platform darwin

# Собрать для конкретной архитектуры
npm run make -- --platform darwin --arch x64
npm run make -- --platform darwin --arch arm64
npm run make -- --platform darwin --arch universal
```

Для подписи и нотификации cоздайте файл **entitlements.plist**:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>com.apple.security.cs.allow-jit</key>
    <true/>
    <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
    <true/>
    <key>com.apple.security.cs.debugger</key>
    <true/>
    <key>com.apple.security.automation.apple-events</key>
    <true/>
</dict>
</plist>
```

Подписать приложение:

```
npm run build --electron-mac-sign --product-id="your-product-id" --app-id="your-app-id" --name="Your-app-name" --version="version-number" --keystore-path=path/to/keystore-file.p12 --store-password=password
```

## Подготовка к сборке для Android

Сборку делаем через **Capacitor**.

Для настройки отредактируйте файл

```
capacitor.config.ts
```

Добавляем мобильное устройство

```
yarn capacitor:android
yarn capacitor:ios
```

Приложение создается в каталоге

```
build/capacitor/android
```

Выполняем предварительную сборку

```
yarn capacitor:make
```

## Сборка для Android

Для дальнейшей сборки под Android лучше всего работать в контейнере nodejs из проекта https://github.com/isengine/server.git

Иначе Вам придется установить JDK, Android SDK и другие библиотеки, которые уже включены в контейнер выше.

Мы рекомендуем воспользоваться актуальной документацией:

https://www.oracle.com/java/technologies/downloads/
https://developer.android.com/tools/releases/platform-tools?hl=ru

Остальные действия те же, что и в предыдущем пункте.

Билд в режиме дебаг:

```
yarn capacitor:dev
```

Готовое приложение будет лежать в каталоге

```
build/capacitor/android/app/build/outputs/apk/debug/app-debug.apk
```

Билд в продакшн:

```
yarn capacitor:build
```

Готовое приложение теперь будет лежать в каталоге

```
build/capacitor/android/app/build/outputs/apk/release/app-release-unsigned.apk
```

Создаем ключ для подписи

```
keytool -genkey -v -keystore MY_RELEASE_KEY.jks -keyalg RSA -keysize 2048 -validity 10000 -alias MY_KEY_ALIAS
```

Запишите созданные пароли и alias, так как они понадобятся вам в дальнейшем.

Создаем копию приложения

```
cp build/capacitor/android/app/build/outputs/apk/release/app-release-unsigned.apk build/capacitor/android/app/build/outputs/apk/release/app-release.apk
```

Подписываем приложение

```
apksigner sign --ks MY_RELEASE_KEY.jks --ks-key-alias MY_KEY_ALIAS --ks-pass pass:YOUR_KEYSTORE_PASSWORD --key-pass pass:YOUR_KEY_PASSWORD build/capacitor/android/app/build/outputs/apk/release/app-release.apk
```

Можно проверить подпись

```
apksigner verify build/capacitor/android/app/build/outputs/apk/release/app-release.apk
```

Если APK подписан правильно, вы не увидите никаких ошибок.

## Сборка для IOS

Сборка производится только на устройствах Mac с установленной средой разработки XCode.

# Tauri

Настроить **Tauri** сложнее, чем **Electron**.

Мы рекомендуем воспользоваться актуальной документацией:

https://v2.tauri.app/start/prerequisites/

Предварительная инициализация:

```
yarn tauri:init
```

По-умолчанию **Tauri** будет распакован в каталог **src-tauri**.

Секция **build** должна иметь такие параметры:

```
  "frontendDist": "../dist",
  "devUrl": "http://localhost:8080",
  "beforeDevCommand": "yarn dev",
  "beforeBuildCommand": "yarn build"
```

Запуск в режиме разработки:

```
yarn tauri:dev
```

Сборка:

```
yarn tauri:build
```

> Если после сборки у вас запускается приложение с пустым экраном, попробуйте обновить компонент **WebView** вашей ОС.

# Тестирование

Тестируем с помощью **Vitest**.

**Vitest** очень похож на **Jest**, но сразу оптимизирован для использования с **TypeScript** и **Vite**. С его помощью можно также тестировать DOM-элементы.

Примеры использования приведены в проекте.

Файлы для тестирования должны называться по маске **.test.ts** или **.spec.ts**:

```
src/intro.test.ts
```

Можно использовать наборы кейсов для тестирования. Они должны называться по маске **.case.ts**:

```
src/intro.case.ts
```

Хорошей практикой может быть помещать тесты и кейсы в отдельные папки:

```
tests/
├── cases/
|   ├── ....case.ts
│   └── intro.case.ts
├── ....test.ts
└── intro.test.ts
```

Для запуска всех тестов используем команду

```
yarn test
# npm run test
```

Чтобы запустить какой-либо определенный тест, указываем его в качестве аргумента:

```
yarn test ./src/tests/example.test.ts
# npm run test ./src/tests/example.test.ts
```

# Поддержка

Больше интересных библиотек в репозитории.

Если проект понравился, и вы хотите меня поддержать, не пожалейте поставить звездочку.

А сейчас просто обнимите своих родных и близких, скажите им, как вы их любите.

# Лицензия

Лицензия MIT, 2025
