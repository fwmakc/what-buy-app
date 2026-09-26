import { WebApiFile, WebApiPaths } from '../../../libs/fs';
import { fileHandle } from '../consts/file_handle.const';

export async function readFileByWebApi(
  container: HTMLDivElement,
  button: HTMLButtonElement,
  status: HTMLDivElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    container.textContent = 'Идет загрузка...';

    const fileTypes = [
      {
        description: 'Text files',
        mime: 'text/plain',
        extensions: ['txt'],
      },
    ];

    try {
      if (!fileHandle.dir) {
        const paths = new WebApiPaths();
        fileHandle.dir = await paths.documents();
      }

      const file = new WebApiFile(undefined, fileHandle.dir);

      const handle = await file.openDialog(fileTypes);
      file.set(handle);

      const content = await file.read();

      container.textContent = content || '';

      const fileInfo = await file.info();
      container.textContent += '\n\n' + JSON.stringify(fileInfo);

      fileHandle.file = handle!;

      status.textContent = `Открытый файл: ${fileHandle.file?.name || ''}`;
    } catch (e) {
      container.textContent = '';
      status.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
