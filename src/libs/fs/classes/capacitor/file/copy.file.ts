import type { Directory } from '@capacitor/filesystem';
import { Filesystem } from '@capacitor/filesystem';

export async function copyFile(
  oldFilePath: string,
  newFilePath: string,
  directory?: Directory,
): Promise<void> {
  const data = await Filesystem.readFile({
    path: oldFilePath,
    directory,
  });

  await Filesystem.writeFile({
    path: newFilePath,
    data: data.data,
    directory,
  });
}
