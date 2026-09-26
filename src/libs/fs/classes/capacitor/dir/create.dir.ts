import { Filesystem } from '@capacitor/filesystem';

export async function createDir(dirPath: string): Promise<void> {
  await Filesystem.mkdir({
    path: dirPath,
    // directory: Directory.Documents,
    recursive: true,
  });
}
