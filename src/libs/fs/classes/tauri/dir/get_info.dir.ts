import { extname, basename, dirname } from '@tauri-apps/api/path';
import { stat } from '@tauri-apps/plugin-fs';

import type { ListItem } from '../../../interfaces/list.interface';

import { sizeDir } from './size.dir';

export async function getInfoDir(currentDir: string): Promise<ListItem> {
  const fileInfo = await stat(currentDir);

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

  const fileExtension = await extname(currentDir);
  const name = await basename(currentDir);
  const fullPath = await dirname(currentDir);

  const size = await sizeDir(currentDir);

  let stats = '';

  try {
    stats = JSON.stringify(fileInfo);
  } catch (e) {
    console.log(e);
  }

  return {
    path: currentDir,
    // size: fileInfo.size,
    size,

    fileExtension,
    name,
    fullPath,

    type,

    modifiedAt: fileInfo.mtime || undefined,
    createdAt: fileInfo.birthtime || undefined,

    stats,
  };
}
