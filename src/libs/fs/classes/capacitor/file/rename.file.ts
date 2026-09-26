import type { Directory } from '@capacitor/filesystem';
import { Filesystem } from '@capacitor/filesystem';

export async function renameFile(
  oldFilePath: string,
  newFilePath: string,
  directory?: Directory,
): Promise<void> {
  await Filesystem.rename({
    from: oldFilePath,
    to: newFilePath,
    directory,
  });
}
