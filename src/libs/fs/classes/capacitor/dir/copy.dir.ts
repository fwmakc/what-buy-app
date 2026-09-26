import { Filesystem } from '@capacitor/filesystem';

export async function copyDir(
  oldFilePath: string,
  newFilePath: string,
): Promise<void> {
  await Filesystem.mkdir({
    path: newFilePath,
    // directory: Directory.Documents,
    recursive: true,
  });

  // Получаем содержимое старой папки
  const contents = await Filesystem.readdir({
    path: oldFilePath,
    // directory: Directory.Documents,
  });

  for (const item of contents.files) {
    const oldItemPath = `${oldFilePath}/${item.name}`;
    const newItemPath = `${newFilePath}/${item.name}`;

    if (item.type === 'directory') {
      await copyDir(oldItemPath, newItemPath);
    } else {
      const fileData = await Filesystem.readFile({
        path: oldItemPath,
        // directory: Directory.Documents,
      });

      await Filesystem.writeFile({
        path: newItemPath,
        data: fileData.data,
        // directory: Directory.Documents,
      });
    }
  }
}
