import { WebApiFile, WebApiPaths } from '../../../libs/fs';
import { fileHandle } from '../consts/file_handle.const';

export async function writeFileByWebApi(
  container: HTMLTextAreaElement,
  button: HTMLButtonElement,
  status: HTMLDivElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    status.textContent = 'Идет сохранение...';

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

      if (!fileHandle.file) {
        const handle = await file.saveDialog(fileTypes);
        fileHandle.file = handle!;
      }

      file.set(fileHandle.file);

      const content = container.value || '';
      await file.write(content);

      status.textContent = `Сохраненный файл: ${fileHandle.file?.name || ''}`;
    } catch (e) {
      status.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
