import { Filesystem } from '@capacitor/filesystem';

export async function removeDir(dirPath: string): Promise<void> {
  await Filesystem.rmdir({
    path: dirPath,
    // directory: Directory.Documents,
    recursive: true,
  });
}
