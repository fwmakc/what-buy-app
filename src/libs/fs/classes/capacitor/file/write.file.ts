import type { Directory } from '@capacitor/filesystem';
import { Filesystem, Encoding } from '@capacitor/filesystem';

export async function writeFile(
  fileName: string,
  content: string,
  directory?: Directory,
): Promise<void> {
  await Filesystem.writeFile({
    path: fileName,
    data: content,
    directory,
    encoding: Encoding.UTF8,
  });
}
