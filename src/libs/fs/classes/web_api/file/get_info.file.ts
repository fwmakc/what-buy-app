import type { ListItem } from '../../../interfaces/list.interface';

export async function getInfoFile(
  fileHandle: FileSystemFileHandle,
): Promise<ListItem> {
  if (!fileHandle) {
    return {};
  }

  const fileInfo = await fileHandle.getFile();

  let fileName = '';
  let fileExtension = '';

  const fileNames = fileInfo.name?.split('.');

  if (fileNames[0] === '' && fileNames.length === 2) {
    fileName = `.${fileNames[0]}`;
  } else {
    fileExtension = fileNames.pop() || '';
    fileName = fileNames.join('.');
  }

  return {
    name: fileInfo.name,
    fileName,
    fileExtension,

    meta: fileInfo.type,
    type: 'file',
    size: fileInfo.size,

    modifiedAt: new Date(fileInfo.lastModified),
    mtime: fileInfo.lastModified,
  };
}
