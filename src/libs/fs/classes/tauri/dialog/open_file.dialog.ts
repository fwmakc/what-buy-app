import { open } from '@tauri-apps/plugin-dialog';

import type { FileTypes } from '../../../interfaces/file_types.interface';

import { convertFileTypesToTauri } from './helpers/convert_file_types_to_tauri';

export async function openFileDialog(
  defaultDir?: string,
  fileTypes?: FileTypes,
): Promise<string> {
  let filters;

  if (fileTypes) {
    filters = convertFileTypesToTauri(fileTypes);
  }

  return (await open({
    defaultPath: defaultDir,
    multiple: false,
    filters,
  })) as string;
}
