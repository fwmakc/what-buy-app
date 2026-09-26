import { TauriDir, TauriPaths } from '../../../libs/fs';

export async function readDirectoryByTauriTarget(
  container: HTMLDivElement,
  button: HTMLButtonElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    container.textContent = 'Идет загрузка...';

    try {
      const textContent: string[] = [];

      const paths = new TauriPaths();

      const app = await paths.app();
      textContent.push(`app:[${app}]`);

      const cache = await paths.cache();
      textContent.push(`cache:[${cache}]`);

      const data = await paths.data();
      textContent.push(`data:[${data}]`);

      const documents = await paths.documents();
      textContent.push(`documents:[${documents}]`);

      const home = await paths.home();
      textContent.push(`home:[${home}]`);

      const dir = new TauriDir(home);
      const dirInfo = await dir.info();
      textContent.push(`dirInfo:[${dirInfo.stats}]`);

      container.textContent = textContent.join('\n');
    } catch (e) {
      container.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
