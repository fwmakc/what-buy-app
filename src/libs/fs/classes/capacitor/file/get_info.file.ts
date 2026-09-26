import type { Directory } from '@capacitor/filesystem';
import { Filesystem } from '@capacitor/filesystem';

import type { ListItem } from '../../../interfaces/list.interface';

export async function getInfoFile(
  fileName: string,
  directory?: Directory,
): Promise<ListItem> {
  const fileInfo = await Filesystem.stat({
    path: fileName,
    directory,
  });

  let type: ListItem['type'];
  if (fileInfo.type === 'file') {
    type = 'file';
  }
  if (fileInfo.type === 'directory') {
    type = 'dir';
  }

  let stats = '';

  try {
    stats = JSON.stringify(fileInfo);
  } catch (e) {
    console.log(e);
  }

  return {
    path: fileName,
    fullPath: fileInfo.uri,
    size: fileInfo.size,

    type,

    createdAt: fileInfo?.ctime ? new Date(fileInfo.ctime) : undefined,
    modifiedAt: fileInfo?.mtime ? new Date(fileInfo.mtime) : undefined,

    ctime: fileInfo?.ctime,
    mtime: fileInfo?.mtime,

    stats,
  };
}
