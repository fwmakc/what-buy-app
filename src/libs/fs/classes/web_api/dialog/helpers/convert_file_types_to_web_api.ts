import type { FileTypes } from '../../../../interfaces/file_types.interface';

interface WebApiFilterType {
  description?: string;
  accept?: {
    [key: string]: string[];
  };
}

export function convertFileTypesToWebApi(
  fileTypes?: FileTypes,
): WebApiFilterType[] | undefined {
  if (!fileTypes || !Array.isArray(fileTypes)) {
    return;
  }

  const filters: WebApiFilterType[] = [];

  fileTypes.forEach(fileType => {
    if (
      !fileType ||
      !fileType?.extensions ||
      !Array.isArray(fileType.extensions)
    ) {
      return;
    }

    const filter: WebApiFilterType = {
      description: fileType.description as string,
      accept: {
        [fileType.mime || '*/*']: fileType.extensions.map(
          extension => `.${extension}`,
        ),
      },
    };

    filters.push(filter);
  });

  return filters;
}
