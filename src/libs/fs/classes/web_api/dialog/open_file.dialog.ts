import type { FileTypes } from '../../../interfaces/file_types.interface';

import { convertFileTypesToWebApi } from './helpers/convert_file_types_to_web_api';

export async function openFileDialog(
  defaultDir?: FileSystemDirectoryHandle,
  fileTypes?: FileTypes,
): Promise<FileSystemFileHandle> {
  let types;

  if (fileTypes) {
    types = convertFileTypesToWebApi(fileTypes);
  }

  const file = (
    await (window as any).showOpenFilePicker({
      startIn: defaultDir,
      multiple: false,
      types,
    })
  )?.[0] as FileSystemFileHandle;

  return file;
}
