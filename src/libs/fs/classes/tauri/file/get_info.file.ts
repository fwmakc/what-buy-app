import { extname, basename, dirname } from '@tauri-apps/api/path';
import { stat } from '@tauri-apps/plugin-fs';

import type { ListItem } from '../../../interfaces/list.interface';

export async function getInfoFile(fileName: string): Promise<ListItem> {
  const fileInfo = await stat(fileName);

  let type: ListItem['type'];
  if (fileInfo.isFile) {
    type = 'file';
  }
  if (fileInfo.isDirectory) {
    type = 'dir';
  }
  if (fileInfo.isSymlink) {
    type = 'symlink';
  }

  const fileExtension = await extname(fileName);
  const name = await basename(fileName);
  const fullPath = await dirname(fileName);

  let stats = '';

  try {
    stats = JSON.stringify(fileInfo);
  } catch (e) {
    console.log(e);
  }

  return {
    path: fileName,
    size: fileInfo.size,

    fileExtension,
    name,
    fullPath,

    type,

    modifiedAt: fileInfo.mtime || undefined,
    createdAt: fileInfo.birthtime || undefined,

    stats,
  };
}
