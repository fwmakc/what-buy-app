// import { ElectronDir, ElectronPaths } from '../../../libs/fs';
import { ElectronPaths } from '../../../libs/fs';

export async function readDirectoryByElectronTarget(
  container: HTMLDivElement,
  button: HTMLButtonElement,
): Promise<void> {
  button.addEventListener('click', async function () {
    container.textContent = 'Идет загрузка...';

    try {
      const textContent: string[] = [];

      const paths = new ElectronPaths();

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

      // const dir = new ElectronDir(app + '\\vk_swiftshader_icd.json');
      // await dir.info();
      // const dirInfo = await dir.info();
      // textContent.push(`dirInfo:[${dirInfo.stats}]`);

      container.textContent = textContent.join('\n');
    } catch (e) {
      container.textContent = `Error: ${(e as Error)?.message || 'unknown'}`;
    }
  });
}
