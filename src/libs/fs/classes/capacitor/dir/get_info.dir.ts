import { Filesystem } from '@capacitor/filesystem';

import type { ListItem } from '../../../interfaces/list.interface';

import { sizeDir } from './size.dir';

export async function getInfoDir(directory: string): Promise<ListItem> {
  const fileInfo = await Filesystem.stat({
    path: directory,
  });

  let type: ListItem['type'];
  if (fileInfo.type === 'file') {
    type = 'file';
  }
  if (fileInfo.type === 'directory') {
    type = 'dir';
  }

  const size = await sizeDir(directory);

  let stats = '';

  try {
    stats = JSON.stringify(fileInfo);
  } catch (e) {
    console.log(e);
  }

  return {
    name: directory,
    path: directory,
    fullPath: fileInfo.uri,
    // size: fileInfo.size,
    size,

    type,

    createdAt: fileInfo?.ctime ? new Date(fileInfo.ctime) : undefined,
    modifiedAt: fileInfo?.mtime ? new Date(fileInfo.mtime) : undefined,

    ctime: fileInfo?.ctime,
    mtime: fileInfo?.mtime,

    stats,
  };
}
