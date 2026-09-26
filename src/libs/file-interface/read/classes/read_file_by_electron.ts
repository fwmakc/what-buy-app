import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileReader } from '../../interfaces/file_reader.interface';

export class ReadFileByElectron implements FileReader {
  async read({ fileName }: FileOptions): Promise<FileOptions> {
    const path = await import('path');
    const { readFile } = await import('fs/promises');

    fileName = path.resolve(fileName!);

    const content = await readFile(fileName, 'utf-8');

    return { content, fileName };
  }
}
