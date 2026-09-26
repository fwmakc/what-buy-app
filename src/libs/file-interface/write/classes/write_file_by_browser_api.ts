import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileWriter } from '../../interfaces/file_writer.interface';

export class WriteFileByBrowserApi implements FileWriter {
  async write({
    content,
    fileHandle,
    fileName,
    fileTypes,
  }: FileOptions): Promise<FileOptions> {
    if (!('showSaveFilePicker' in window)) {
      throw new Error('File System Access API not supported');
    }

    if (!fileHandle) {
      fileHandle = await (window as any).showSaveFilePicker({
        suggestedName: fileName || '',
        types: fileTypes,
      });
    }

    const writable = await fileHandle!.createWritable();
    await writable.write(content!);
    await writable.close();

    return { fileHandle };
  }
}
