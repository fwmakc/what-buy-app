import { ElectronFile, ElectronPaths } from '../../../libs/fs';
import { fileHandle } from '../consts/file_handle.const';

export async function readFileByElectronTarget(
  container: HTMLDivElement,
  input: HTMLInputElement,
  button: HTMLButtonElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    container.textContent = 'Идет загрузка...';

    const fileName = input.value;

    try {
      const paths = new ElectronPaths();
      const defaultDir = await paths.documents();

      const file = new ElectronFile(fileName, defaultDir);

      const content = await file.read();
      const handle = file.get();

      container.textContent = content || '';

      const fileInfo = await file.info();
      container.textContent += '\n\n' + fileInfo.stats;

      fileHandle.value = handle!;
    } catch (e) {
      container.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
