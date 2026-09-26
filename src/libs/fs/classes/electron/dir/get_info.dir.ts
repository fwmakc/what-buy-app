import type { ListItem } from '../../../interfaces/list.interface';

import { sizeDir } from './size.dir';

export async function getInfoDir(currentDir: string): Promise<ListItem> {
  const { stat } = await import('fs/promises');

  console.log('stat', currentDir);

  let fileInfo: any = {};

  try {
    fileInfo = await stat(currentDir);
    console.log('fileInfo', fileInfo);
  } catch (e) {
    console.log(e);
  }

  let type: ListItem['type'];

  if (fileInfo.isFile()) {
    type = 'file';
  }
  if (fileInfo.isDirectory()) {
    type = 'dir';
  }
  if (fileInfo.isSymbolicLink()) {
    type = 'symlink';
  }

  const size = await sizeDir(currentDir);

  return {
    path: currentDir,
    // size: fileInfo.size,
    size,

    type,

    modifiedAt: fileInfo.mtime || undefined,
    createdAt: fileInfo.birthtime || undefined,
  };
}
