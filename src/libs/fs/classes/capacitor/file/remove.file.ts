import type { Directory } from '@capacitor/filesystem';
import { Filesystem } from '@capacitor/filesystem';

export async function removeFile(
  fileName: string,
  directory?: Directory,
): Promise<void> {
  await Filesystem.deleteFile({
    path: fileName,
    directory,
  });
}
