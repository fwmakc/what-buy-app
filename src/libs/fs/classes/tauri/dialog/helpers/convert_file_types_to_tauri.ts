import type { FileTypes } from '../../../../interfaces/file_types.interface';

interface TauriFilterType {
  name: string;
  extensions: string[];
}

export function convertFileTypesToTauri(
  fileTypes?: FileTypes,
): TauriFilterType[] | undefined {
  if (!fileTypes || !Array.isArray(fileTypes)) {
    return;
  }

  const filters: TauriFilterType[] = [];

  fileTypes.forEach(fileType => {
    if (!fileType || !Array.isArray(fileType)) {
      return;
    }

    if (!fileType?.extensions || !Array.isArray(fileType.extensions)) {
      return;
    }

    const filter: TauriFilterType = {
      name: fileType.description as string,
      extensions: fileType.extensions,
    };

    filters.push(filter);
  });

  return filters;
}
