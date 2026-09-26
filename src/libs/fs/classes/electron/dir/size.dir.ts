export async function sizeDir(dirPath: string): Promise<number> {
  const fs = await import('fs/promises');

  const files = await fs.readdir(dirPath);
  let totalSize = 0;

  for (const file of files) {
    const filePath = `${dirPath}/${file}`;
    const stats = await fs.stat(filePath);

    if (stats.isFile()) {
      totalSize += stats.size;
    } else if (stats.isDirectory()) {
      totalSize += await sizeDir(filePath);
    }
  }

  return totalSize;
}
