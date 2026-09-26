import { writeFile, WriteFileByBrowser } from '../../../libs/file-interface';

export async function writeFileByBrowser(
  container: HTMLTextAreaElement,
  button: HTMLButtonElement,
  status: HTMLDivElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    status.textContent = 'Идет сохранение...';

    const fileName = `new_file_${Date.now()}.txt`;
    const content = container.value || '';

    const fileWriter = new WriteFileByBrowser();
    await writeFile(fileWriter, { fileName, content });
    status.textContent = '';
  });
}
