import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileReader } from '../../interfaces/file_reader.interface';

export class ReadFileByBrowserApi implements FileReader {
  async read({ fileHandle, fileTypes }: FileOptions): Promise<FileOptions> {
    let content = '';

    if (!fileHandle) {
      fileHandle = await (window as any)
        .showOpenFilePicker({
          multiple: false,
          types: fileTypes,
        })
        .then((res: any) => res?.[0]);
    }

    if (fileHandle) {
      const file = await (fileHandle as any)?.[0].getFile();
      content = await file.text();
    }

    return {
      fileHandle,
      content,
    };
  }
}
