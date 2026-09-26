import type { ListItem } from '../../../interfaces/list.interface';

export async function getInfoDir(
  dirHandle?: FileSystemDirectoryHandle,
): Promise<ListItem> {
  if (!dirHandle) {
    return {};
  }

  return {
    name: dirHandle.name,
    type: 'dir',
  };
}
