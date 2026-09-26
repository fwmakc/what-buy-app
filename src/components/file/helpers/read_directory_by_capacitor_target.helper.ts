import { CapacitorDir, CapacitorPaths } from '../../../libs/fs';

export async function readDirectoryByCapacitorTarget(
  container: HTMLDivElement,
  button: HTMLButtonElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    container.textContent = 'Идет загрузка...';

    try {
      const textContent: string[] = [];

      const paths = new CapacitorPaths();

      const app = await paths.app();
      textContent.push(`app:[${app.uri}]`);

      const cache = await paths.cache();
      textContent.push(`cache:[${cache.uri}]`);

      const data = await paths.data();
      textContent.push(`data:[${data.uri}]`);

      const documents = await paths.documents();
      textContent.push(`documents:[${documents.uri}]`);

      const home = await paths.home();
      textContent.push(`home:[${home.uri}]`);

      const dir = new CapacitorDir(home.uri);
      const dirInfo = await dir.info();
      textContent.push(`dirInfo:[${dirInfo.stats}]`);

      container.textContent = textContent.join('\n');
    } catch (e) {
      container.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
