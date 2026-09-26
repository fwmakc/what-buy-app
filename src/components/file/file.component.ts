import { APP } from '../../libs/app-info';

import { readDirectoryByCapacitorTarget } from './helpers/read_directory_by_capacitor_target.helper';
import { readDirectoryByElectronTarget } from './helpers/read_directory_by_electron_target.helper';
import { readDirectoryByTauriTarget } from './helpers/read_directory_by_tauri_target.helper';
import { readFileByBrowser } from './helpers/read_file_by_browser.helper';
import { readFileByCapacitorTarget } from './helpers/read_file_by_capacitor_target.helper';
import { readFileByElectronTarget } from './helpers/read_file_by_electron_target.helper';
import { readFileByFetchTarget } from './helpers/read_file_by_fetch_target.helper';
import { readFileByTauriTarget } from './helpers/read_file_by_tauri_target.helper';
import { readFileByWebApi } from './helpers/read_file_by_web_api.helper';
import { writeFileByBrowser } from './helpers/write_file_by_browser.helper';
import { writeFileByCapacitorTarget } from './helpers/write_file_by_capacitor_target.helper';
import { writeFileByElectronTarget } from './helpers/write_file_by_electron_target.helper';
import { writeFileByTauriTarget } from './helpers/write_file_by_tauri_target.helper';
import { writeFileByWebApi } from './helpers/write_file_by_web_api.helper';

export default function (): void {
  document.querySelector<HTMLDivElement>('#app #file-component')!.innerHTML = `
  <div class="row">
    <div class="col">
      <div id="ReadDirectoryByCapacitorTarget">
        <h3>ReadDirectoryByCapacitorTarget</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
    <div class="col">
      <div id="ReadDirectoryByElectronTarget">
        <h3>ReadDirectoryByElectronTarget</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
    <div class="col">
      <div id="ReadDirectoryByTauriTarget">
        <h3>ReadDirectoryByTauriTarget</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div id="ReadFileByFetchTargetDot">
        <h3>ReadFileByFetchTargetDot</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="text" class="input full-width" value="./files/example.txt">
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
    <div class="col">
      <div id="ReadFileByFetchTargetSlash">
        <h3>ReadFileByFetchTargetSlash</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="text" class="input full-width" value="/files/example.txt">
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div id="ReadFileByBrowser">
        <h3>ReadFileByBrowser</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="file" class="button">
      </div>
    </div>
    <div class="col">
      <div id="WriteFileByBrowser">
        <h3>WriteFileByBrowser</h3>
        <textarea class="file_content full-width">ваше содержимое файла</textarea>
        <input type="button" class="button" value="Сохранить">
        <div class="status"></div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div id="ReadFileByCapacitorTarget">
        <h3>ReadFileByCapacitorTarget</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="text" class="input full-width file" value="assets/public/files/example.txt">
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
    <div class="col">
      <div id="WriteFileByCapacitorTarget">
        <h3>WriteFileByCapacitorTarget</h3>
        <textarea class="file_content full-width">ваше содержимое файла</textarea>
        <input type="button" class="button" value="Сохранить">
        <div class="status"></div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div id="ReadFileByElectronTarget">
        <h3>ReadFileByElectronTarget</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="text" class="input full-width" value="./files/example.txt">
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
    <div class="col">
      <div id="WriteFileByElectronTarget">
        <h3>WriteFileByElectronTarget</h3>
        <textarea class="file_content full-width">ваше содержимое файла</textarea>
        <input type="button" class="button" value="Сохранить">
        <div class="status"></div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div id="ReadFileByTauriTarget">
        <h3>ReadFileByTauriTarget</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="text" class="input full-width" value="./files/example.txt">
        <input type="button" class="button" value="Открыть">
      </div>
    </div>
    <div class="col">
      <div id="WriteFileByTauriTarget">
        <h3>WriteFileByTauriTarget</h3>
        <textarea class="file_content full-width">ваше содержимое файла</textarea>
        <input type="button" class="button" value="Сохранить">
        <div class="status"></div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div id="ReadFileByWebApi">
        <h3>ReadFileByWebApi</h3>
        <div class="file_content">здесь будет содержимое файла</div>
        <input type="button" class="button" value="Открыть">
        <div class="status"></div>
      </div>
    </div>
    <div class="col">
      <div id="WriteFileByWebApi">
        <h3>WriteFileByWebApi</h3>
        <textarea class="file_content full-width">ваше содержимое файла</textarea>
        <input type="button" class="button" value="Сохранить">
        <div class="status"></div>
      </div>
    </div>
  </div>
`;

  // Directory

  if (APP.isCapacitor) {
    readDirectoryByCapacitorTarget(
      document.querySelector<HTMLDivElement>(
        '#ReadDirectoryByCapacitorTarget .file_content',
      )!,
      document.querySelector<HTMLButtonElement>(
        '#ReadDirectoryByCapacitorTarget .button',
      )!,
    );
  }

  if (APP.isElectron) {
    readDirectoryByElectronTarget(
      document.querySelector<HTMLDivElement>(
        '#ReadDirectoryByElectronTarget .file_content',
      )!,
      document.querySelector<HTMLButtonElement>(
        '#ReadDirectoryByElectronTarget .button',
      )!,
    );
  }

  if (APP.isTauri) {
    readDirectoryByTauriTarget(
      document.querySelector<HTMLDivElement>(
        '#ReadDirectoryByTauriTarget .file_content',
      )!,
      document.querySelector<HTMLButtonElement>(
        '#ReadDirectoryByTauriTarget .button',
      )!,
    );
  }

  // Fetch

  readFileByFetchTarget(
    document.querySelector<HTMLDivElement>(
      '#ReadFileByFetchTargetDot .file_content',
    )!,
    document.querySelector<HTMLInputElement>(
      '#ReadFileByFetchTargetDot .input',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#ReadFileByFetchTargetDot .button',
    )!,
  );

  readFileByFetchTarget(
    document.querySelector<HTMLDivElement>(
      '#ReadFileByFetchTargetSlash .file_content',
    )!,
    document.querySelector<HTMLInputElement>(
      '#ReadFileByFetchTargetSlash .input',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#ReadFileByFetchTargetSlash .button',
    )!,
  );

  // Browser

  readFileByBrowser(
    document.querySelector<HTMLDivElement>('#ReadFileByBrowser .file_content')!,
    document.querySelector<HTMLButtonElement>('#ReadFileByBrowser .button')!,
  );

  writeFileByBrowser(
    document.querySelector<HTMLTextAreaElement>(
      '#WriteFileByBrowser .file_content',
    )!,
    document.querySelector<HTMLButtonElement>('#WriteFileByBrowser .button')!,
    document.querySelector<HTMLDivElement>('#WriteFileByBrowser .status')!,
  );

  // Capacitor

  readFileByCapacitorTarget(
    document.querySelector<HTMLDivElement>(
      '#ReadFileByCapacitorTarget .file_content',
    )!,
    document.querySelector<HTMLInputElement>(
      '#ReadFileByCapacitorTarget .input.file',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#ReadFileByCapacitorTarget .button',
    )!,
  );

  writeFileByCapacitorTarget(
    document.querySelector<HTMLTextAreaElement>(
      '#WriteFileByCapacitorTarget .file_content',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#WriteFileByCapacitorTarget .button',
    )!,
    document.querySelector<HTMLDivElement>(
      '#WriteFileByCapacitorTarget .status',
    )!,
  );

  // Electron

  readFileByElectronTarget(
    document.querySelector<HTMLDivElement>(
      '#ReadFileByElectronTarget .file_content',
    )!,
    document.querySelector<HTMLInputElement>(
      '#ReadFileByElectronTarget .input',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#ReadFileByElectronTarget .button',
    )!,
  );

  writeFileByElectronTarget(
    document.querySelector<HTMLTextAreaElement>(
      '#WriteFileByElectronTarget .file_content',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#WriteFileByElectronTarget .button',
    )!,
    document.querySelector<HTMLDivElement>(
      '#WriteFileByElectronTarget .status',
    )!,
  );

  // Tauri

  readFileByTauriTarget(
    document.querySelector<HTMLDivElement>(
      '#ReadFileByTauriTarget .file_content',
    )!,
    document.querySelector<HTMLInputElement>('#ReadFileByTauriTarget .input')!,
    document.querySelector<HTMLButtonElement>(
      '#ReadFileByTauriTarget .button',
    )!,
  );

  writeFileByTauriTarget(
    document.querySelector<HTMLTextAreaElement>(
      '#WriteFileByTauriTarget .file_content',
    )!,
    document.querySelector<HTMLButtonElement>(
      '#WriteFileByTauriTarget .button',
    )!,
    document.querySelector<HTMLDivElement>('#WriteFileByTauriTarget .status')!,
  );

  // WebApi

  readFileByWebApi(
    document.querySelector<HTMLDivElement>('#ReadFileByWebApi .file_content')!,
    document.querySelector<HTMLButtonElement>('#ReadFileByWebApi .button')!,
    document.querySelector<HTMLDivElement>('#ReadFileByWebApi .status')!,
  );

  writeFileByWebApi(
    document.querySelector<HTMLTextAreaElement>(
      '#WriteFileByWebApi .file_content',
    )!,
    document.querySelector<HTMLButtonElement>('#WriteFileByWebApi .button')!,
    document.querySelector<HTMLDivElement>('#WriteFileByWebApi .status')!,
  );
}
