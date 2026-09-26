import { readFile, ReadFileByBrowser } from '../../../libs/file-interface';

export async function readFileByBrowser(
  container: HTMLDivElement,
  button: HTMLButtonElement,
): Promise<void> {
  button.addEventListener('change', async function (event) {
    container.textContent = 'Идет загрузка...';

    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    const fileReader = new ReadFileByBrowser();

    try {
      const response = await readFile(fileReader, { file });
      container.textContent = response.content || '';
    } catch (e) {
      container.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
