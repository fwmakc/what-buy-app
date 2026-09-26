import { Filesystem } from '@capacitor/filesystem';

export async function renameDir(
  oldPath: string,
  newPath: string,
): Promise<void> {
  await Filesystem.rename({
    from: oldPath,
    to: newPath,
    // directory: Directory.Documents,
  });
}
