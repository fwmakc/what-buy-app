import { Filesystem } from '@capacitor/filesystem';

export async function sizeDir(dirPath: string): Promise<number> {
  const result = await Filesystem.readdir({
    path: dirPath,
    // directory: Directory.Documents,
  });

  let totalSize = 0;

  for (const entry of result.files) {
    const entryPath = `${dirPath}/${entry.name}`;

    if (entry.type === 'file') {
      totalSize += entry.size;
    } else if (entry.type === 'directory') {
      totalSize += await sizeDir(entryPath);
    }
  }

  return totalSize;
}
