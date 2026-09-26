import { readFile, ReadFileByFetch } from '../../../libs/file-interface';

export async function readFileByFetchTarget(
  container: HTMLDivElement,
  input: HTMLInputElement,
  button: HTMLButtonElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    const fileName = input.value;
    const fileReader = new ReadFileByFetch();

    try {
      const response = await readFile(fileReader, { fileName });
      container.textContent = response.content || '';
    } catch (e) {
      container.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
