import type { Directory } from '@capacitor/filesystem';
import { Filesystem, Encoding } from '@capacitor/filesystem';

export async function readFile(
  fileName: string,
  directory?: Directory,
): Promise<string> {
  const result = await Filesystem.readFile({
    path: fileName,
    directory,
    encoding: Encoding.UTF8,
  });

  return (result?.data as string) || '';
}
