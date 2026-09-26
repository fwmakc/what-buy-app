import type { ListItem } from '../../../interfaces/list.interface';

export async function getInfoFile(fileName: string): Promise<ListItem> {
  const { stat } = await import('fs/promises');

  const fileInfo = await stat(fileName);

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

  let stats = '';

  try {
    stats = JSON.stringify(fileInfo);
  } catch (e) {
    console.log(e);
  }

  return {
    path: fileName,
    size: fileInfo.size,

    type,

    modifiedAt: fileInfo.mtime || undefined,
    createdAt: fileInfo.birthtime || undefined,

    ctime: Number(fileInfo.birthtime),
    mtime: Number(fileInfo.mtime),

    stats,
  };
}
